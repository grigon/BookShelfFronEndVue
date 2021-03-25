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
            <img class="star" v-bind:src="`${star}`">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4" v-show="message">{{message}}</p>
          <p class="subtitle is-6" for="book">{{book.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
  .card {
    margin: 0.5%;
    box-shadow: none;
    cursor: pointer;
    transition: 0.2s;
  }
  .card:hover {
    box-shadow: 3px 3px 5px darkgrey;
    height: 110%;
    width: 60%;
  }
  .star {
    width: 25%;
  }
  .card-content {
    height: 5.5rem;
  }
</style>