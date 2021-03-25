<template>
  <div class="columns is-mobile">
    <div class="has-avatar">
      <Avatar class="avatar"/>
    </div>
    <div class="column has-content">
      <div class="content is-normal">
        <h1>Dominic</h1>
        <p class="is-bold has-text-grey">On BookShelf from 2020</p>
        <h3>Returned 87% books on time</h3>
        <p class="has-text-grey-light ha">Last active 12 hour ago</p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/atoms/Avatar";

export default {
  name: "ConversationUser",
  components: {
    Avatar
  }
}
</script>

<style scoped>
  h1, h3, p {
    font-weight: bold;
  }
  p {
    font-size: 1.3rem;
  }
  .content {
    margin-top: 5%;
  }
  .has-avatar {
    width: 25%;
    margin-left: 10%;
    margin-top: 2%;
  }
  .has-content {
    width: 85%;
  }
</style>