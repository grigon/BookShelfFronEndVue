<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by4">
        <img v-bind:src="`${coverage}`">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="star image is-48x48">
            <img class="starv" v-bind:src="`${star}`">
          </figure>
        </div>
        <div class="media-content">
<!--          <p class="title is-4" v-show="message">{{message}}</p>-->
          <p class="subtitle is-6" for="book">{{book.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
/*const imgLink = 'https://i.picsum.photos/id/141/200/300.jpg?hmac=d8Mh3TnTbeViVLDauKiTRsNX8KAY5RGDbXDwEuecPko';*/
const star = '/img/star.png';
const aauthor = {name : "marta", title: "blabla"};
const title = "book title";
const coverage = "/img/book1.jpg";
export default {
  name: "BookThumbnail",
  components: {
  },
  data(){
    return{
      star: star,
      coverage: coverage,
      book: {},
    }
  },
}
</script>

<style scoped>
/*  .card-image {
    height: 7%;
  }*/
  .card {
    width: 17%;
  }
</style>