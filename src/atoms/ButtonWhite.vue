<template>
  <button class="button-white button is-danger">Block this user</button>
</template>

<script>
export default {
  name: "ButtonWhite",
}
</script>

<style scoped>
  .button-white {
    background-color: white;
    color: #ea3918;
    border-color: #ea3918;
    transition-duration: 0.3s;
    link-hover-border: #ec6349;
  }
  .button-white:hover {
    background-color: #ea3918;
    color: white;
  }
  .button-white:focus {
    background-color: white;
    color: #ea3918;
  }
</style>