<template lang='pug'>
div
  //- .hero.is-primary.is-fullheight(style='background-image: linear-gradient(45deg, #4063b0, #e35985); clip-path: polygon(0 0, 100% 0, 100% 89%, 0% 97%); padding-bottom: 50px')
    .hero-body
      .container.has-text-left(style='filter: drop-shadow(2px 4px 6px #0005);')
        img.bounce.animated(src='../assets/logo.png' style='width: 220px; border-radius: 10000px;' alt='CUOPEN logo')
        br
        br
        .title CU Open
        .subtitle งานแข่งกีฬา freshy chula
        .subtitle ระหว่างวันที่ x สิงหาคม 2562 - x กันยายน 2652
        .buttons
          a.button.is-warning(href='#coins') จำนวนเหรียญ
          a.button.is-warning(href='#records') ผลการแข่งขัน
  .section.has-text-left.flex-center
    .content.tablet-max-width
      #coins
      br
      h1 จำนวนเหรียญ
      br
      CoinsTable
      br
      #records
      br
      h1 ผลการแข่งขัน
      br
      MatchsResult(src="/records")
      br
      br
      br

  //- .hero.is-primary(style='background-image: linear-gradient(145deg, #4063b0, #e35985); clip-path: polygon(0 80px, 100% 0, 100% 100%, 0% 100%); padding: 50px 30px')
    .hero-body
      .container.has-text-right(style='filter: drop-shadow(2px 4px 6px #0005);')
        b-icon(icon='coffee')
        a.has-text-white(style='margin-left: 15px' href='https://docs.google.com/spreadsheets/d/1MO8kLiE_UKEDGzo9Qx6CTQxDPmqBw9yszEGBdZDkf0E/edit?usp=sharing') admin db



</template>

<script>
import CoinsTable from "../components/CoinsTable.vue";
import MatchsResult from "../components/MatchsResult.vue";

export default {
  name: "home",
  components: {
    MatchsResult,
    CoinsTable
  }
};
</script>

<style lang="scss" scoped>
.hero-body {
  margin-left: 10px;
}
@media screen and (min-width: 600px) {
  .hero-body {
    margin-left: calc(10px + 12vw);
  }
}
.tablet-max-width {
  max-width: 500px;
  min-width: 40vw;
}
.flex-center {
  display: flex;
  justify-content: center;
}

// animetion

.animated {
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-0px) rotateZ(-10deg);
  }
  50% {
    transform: translateX(0px) rotateZ(30deg);
  }
}
.bounce {
  animation-name: bounce;
  transform-origin: 50% 50%;
  position: relative;
}
</style>

