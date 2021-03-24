<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by4">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Book coverage photo">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="star">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BookThumbnail",
  components: {
  }
}
</script>

<style scoped>
  .card-image {
    height: 350px;
  }
  .card {
    width : 250px;
  }
</style>