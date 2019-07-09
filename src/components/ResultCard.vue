<template lang="pug">
  tr
    td
      .border-7days(:day='dayInWeek' v-if='dayInWeek >= 0')
      p(v-else) {{date}}
    td(v-show='showTime') {{strTime}}
    td {{sport}}
    td: IconKind(:value='kind')
    td {{redTeam}}
    td(v-show='showScore' align='center'): div(align='center' :class='winClass["red"]') {{redScore}}
    td(align='center' style='padding-left: 2px; padding-right: 2px;') -
    td(v-show='showScore' align='center'): div(align='center' :class='winClass["blue"]') {{blueScore}}
    td {{blueTeam}}
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/th";
import IconKind from "./IconKind.vue";
export default {
  components: {
    IconKind
  },
  props: {
    redTeam: { type: String, default: "-" },
    blueTeam: { type: String, default: "-" },
    redScore: { default: "-" },
    blueScore: { default: "-" },
    date: { default: "no-date" },
    time: { default: "no-time" },
    sport: { default: "no-sport" },
    kind: { default: "no-kind" },
    showScore: { default: true },
    showTime: { default: false }
  },
  computed: {
    strTime() {
      try {
        return dayjs(this.time)
          .locale("th")
          .format("HH:MM");
      } catch {
        return this.time;
      }
    },
    dayInWeek() {
      try {
        return new Date(this.date).getDay();
      } catch {
        return -1;
      }
    },
    winClass() {
      const [r, b] = [this.redScore, this.blueScore];
      const res = { red: "", blue: "" };
      try {
        if (r == b) return res;
        if (b == "ขาด" || +r > +b) return { red: "icon-winner", blue: "" };
        if (r == "ขาด" || +r < +b) return { red: "", blue: "icon-winner" };
        return res;
      } catch {
        return res;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-winner {
  background-color: #ddf7e6;
  border-radius: 99px;
  padding: 2px;
}
@media screen and (max-width: 500px) {
  tr {
    font-size: 0.65rem;
    td {
      padding: 0.5em 0.3em !important;
      word-break: break-all;
      // word-wrap: break-word;
    }
  }
}

$days-color: (#da5b59, #ffe150, #df88af, #80ce7b, #fc974f, #62c4eb, #be69b4);
$days-name: ("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
.border-7days {
  border: 0px solid black;
  border-width: 0 0 0 5px;
  padding-left: 0.4rem;
  @for $i from 0 to length($days-color) {
    /* unqualified attribute selector is not key */
    &[day="#{$i}"] {
      &::before {
        content: nth($days-name, $i + 1);
        font-size: 0.7rem;
        color: #0008;
        text-transform: uppercase;
        // display: block;
        // transform: rotate(0deg);
      }
      opacity: 0.4;
      border-color: nth($days-color, $i + 1);
    }
  }
}
</style>

