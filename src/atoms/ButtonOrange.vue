<template>
  <button class="button is-danger button-orange">Submit</button>
</template>

<script>
export default {
  name: "ButtonOrange",
}
</script>

<style scoped>
  .button-orange {
    background-color: #ea3918;
    color: white;
    transition-duration: 0.3s;
    link-hover-border: #ec6349;
    margin: 2% 2%;
  }
  .button-orange:hover {
    background-color: #b73b25;
  }
</style>