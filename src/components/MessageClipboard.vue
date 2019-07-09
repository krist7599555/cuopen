<template lang="pug">
  b-message(type='is-info')
    h1 {{title}}
    b-field
      div(style='background-color: white; padding: 0rem .5rem; border-radius: 4px; filter: drop-shadow(0px 3px 3.2px #0001);')
        code.is-size-7(style='white-space: unset; overflow: hidden; text-overflow:ellipsis;') {{text}}
    button.button(
      v-clipboard:copy="text"
      v-clipboard:success='() => $toast.open("copy to clipboard")'
    )
      b-field
        b-icon(icon='copy')
        span copytext to clipboard
</template>

<script>
export default {
  props: {
    text: { default: "" },
    title: {}
  }
};
</script>

