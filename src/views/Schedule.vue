<template lang="pug">
#schedule.section(style='display: flex; justify-content: center; width: 100%;')
  .lim-max-width(style='width: 100%')
    h1 ตารางแข่งขัน
    br
    MatchsResult(src='/schedule' :filter='filter' :showScore='false' :showTime='true')
      br
      b-field
        b-checkbox(v-model='today'): .cu-font วันนี้
        b-checkbox(v-model='tomorrow'): .cu-font พรุ่งนี้
    br
    .lim-max-width(v-show='!today && !tomorrow')
      br
      .anime-chakehead
        b-icon(pack='fas' icon='frown' size='is-large')
      br
      p NO CONTENT
</template>

<script>
// import { database } from "../firebase";
import MatchsResult from "../components/MatchsResult.vue";
export default {
  components: { MatchsResult },
  data() {
    return {
      today: true,
      tomorrow: false
    };
  },
  methods: {
    filter(row) {
      if (this.today && row.date == "วันนี้") return true;
      if (this.tomorrow && row.date == "พรุ่งนี้") return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes chakeHead {
  0%,
  100% {
    transform: rotateZ(20deg);
  }
  50% {
    transform: rotateZ(-20deg);
  }
}
.anime-chakehead {
  animation: chakeHead 1.4s ease-in-out infinite;
}
.lim-max-width {
  max-width: 500px;
  min-width: 40vw;
}
</style>

