<template lang="pug">
  b-icon.icon-kind(:icon='icon' v-if='icon')
  div(v-else) {{value}}
</template>

<script>
export default {
  props: ["value"],
  computed: {
    icon() {
      const icons = {
        ชาย: "mars",
        หญิง: "venus",
        คู่ผสม: "venus-mars",
        คู่ชาย: "mars-double",
        คู่หญิง: "venus-double"
      };
      return icons[this.value] || "genderless";
    }
  }
};
</script>

<style lang="scss">
.icon-kind {
  color: #000;
  opacity: 0.5;
  .fa-mars,
  .fa-mars-double {
    color: #3b7ad9;
  }
  .fa-venus,
  .fa-venus-double {
    color: #eb4290;
  }
  .fa-venus-mars {
    color: #67b96d;
  }
  .fa-genderless {
    color: #ff9800;
  }
}
</style>
