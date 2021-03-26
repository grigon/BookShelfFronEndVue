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
            <img v-bind:src="`${star}`">
<!--            <div class="star">
&lt;!&ndash;              <i class="far fa-star"></i>&ndash;&gt;
            </div>-->
          </figure>
        </div>
        <div class="media-content">
          <p class="x title is-4">{{author}}</p>
          <p class="x subtitle is-6" v-show="author">{{title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
const star = '/img/star.png';
const coverage = "/img/book1.jpg";
const author = "author";
const  title = "title";
export default {
  name: "BookThumbnail",
  components: {
  },
  data(){
    return{
      star: star,
      coverage: coverage,
      author : author,
      title: title,
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
  .star {
    display: inline-block;
    width: 23%;
    transition: 0.2s;
  }
  .card-content {
    height: 5.5rem;
  }
  .media-content {
    width: 80%;
    margin-right: 0;
    z-index: 999;
    display: inline-block;
  }
  .star {
    width: 1.6rem;
  }
  .x {
    font-size: 1rem;
  }
</style>