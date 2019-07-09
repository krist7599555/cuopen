<template lang='pug'>
div(style='min-width: 300px; max-width: 600px')
  b-autocomplete(
    icon="search"
    placeholder='ค้นหา'
    rounded
    :data="sportsList"
    v-model='searchBySport'
    open-on-focus
    type='text'
  )
  slot
  br
  b-icon.fa-spin(icon='circle-notch' v-show='table === null')
  table.table.is-fullwidth
    tbody
      template(v-for='row in tableFilter' v-if='tableFilter')
        ResultCard(v-bind='row'
          :showScore='showScore'
          :showTime='showTime'
        )
</template>

<script>
import ResultCard from "@/components/ResultCard.vue";
import { database } from "../firebase";
import * as _ from "lodash";
export default {
  components: { ResultCard },
  props: {
    src: {
      type: String,
      required: true
    },
    filter: {
      type: Function,
      // eslint-disable-next-line
      default: x => true
    },
    showScore: { default: true },
    showTime: { default: false }
  },
  data() {
    return {
      table: null,
      searchBySport: ""
    };
  },
  mounted() {
    database()
      .ref(this.src)
      .on("value", snp => {
        this.table = this.snapshot2obj(snp.val());
      });
  },
  methods: {
    snapshot2obj(arr2d) {
      return arr2d.slice(1).map(row => _.zipObject(arr2d[0], row));
    }
  },
  computed: {
    tableFilter() {
      return (
        this.table &&
        this.table
          .filter(row => row["sport"].includes(this.searchBySport))
          .filter(this.filter)
      );
    },
    sportsList() {
      return this.table ? _.uniq(_.map(this.table, "sport")) : [];
    }
  }
};
</script>


<style lang="scss" scoped>
hr {
  margin-top: 3rem;
}
hr + .hr-text {
  font-weight: bold;
  font-size: 1.3rem;
  font-style: italic;
  position: absolute;
  margin-top: -39px;
}
.hr-text + div {
  margin-left: calc(15% - 10px);
}
</style>

