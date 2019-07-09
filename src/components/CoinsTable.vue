<template lang='pug'>
  div
    div(v-show='table === null')
      b-icon.fa-spin(icon='circle-notch' v-show='table === null')
    table.table(v-if='table')
      thead
        tr
          th
          th: b-icon.medal.gold(icon='medal')
          th: b-icon.medal.silver(icon='medal')
          th: b-icon.medal.bronze(icon='medal')
          th: div.medal-stack
            b-icon.medal.gold(icon='medal')
            b-icon.medal.silver(icon='medal')
            b-icon.medal.bronze(icon='medal')
      tbody
        tr.medal-score(v-for='row in table.slice(1)')
          td(v-for='w in row') {{w}}

</template>

<script>
import { database } from "../firebase";
export default {
  data() {
    return {
      table: null
    };
  },
  mounted() {
    database()
      .ref("/coins")
      .on("value", snp => {
        this.table = snp.val();
      });
  }
};
</script>

<style lang="scss" scoped>
.medal {
  &.gold {
    color: #f8d270;
  }
  &.silver {
    color: #c0c9ca;
  }
  &.bronze {
    color: #ffa542;
  }
}
.medal-stack {
  position: relative;
  left: 5px;
  .medal {
    position: absolute;
    &:nth-child(1) {
      left: -11px;
      z-index: 4;
      filter: drop-shadow(2px 0px 0px white);
    }
    &:nth-child(2) {
      left: 0px;
      z-index: 3;
      filter: drop-shadow(2px 0px 0px white);
    }
    &:nth-child(3) {
      left: 11px;
      z-index: 2;
      filter: drop-shadow(2px 0px 0px white);
    }
  }
}
.medal-score > *:not(:first-child) {
  text-align: right;
  padding-right: 33px;
  margin: 0 auto;
  width: 70px;
}
</style>

