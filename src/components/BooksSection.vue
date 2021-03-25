<template>
  <div class="box outer is-flex-direction-column">
    <h2 class="title is-2">Crime</h2>
    <div class="box secondary is-flex-direction-row">
      <div class="arrow is-flex-direction-column">
        <img class="a" v-bind:src="`${leftArrow}`">
      </div>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <div class="arrow is-flex-direction-column">
        <img class="a" v-bind:src="`${rightArrow}`">
      </div>
    </div>
  </div>
</template>

<script>
import BookThumbnail from "@/components/BookThumbnail";
const leftArrow = "/img/left-arrow.png";
const rightArrow = "/img/next.png"
export default {
  name: "BooksSection",
  components:{
    BookThumbnail,
  },
  data(){
    return{
      leftArrow: leftArrow,
      rightArrow: rightArrow,
    }
  },
}
</script>

<style scoped>
  .outer {
    margin-top: 5%;
  /*  overflow: hidden;*/
  }
  .arrow {
    display: flex;
    justify-content: center;
    width: 7%;
  }
  .a {
    height: 25%;
  }
  .secondary {
    height: 70%;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    height: 20%;
    font-family: 'Yeseva One', cursive;
  }
  div {
    box-shadow: none;
  }
</style>