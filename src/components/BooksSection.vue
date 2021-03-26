<template>
  <div class="box outer is-flex-direction-column">
    <h2 class="title is-2">Crime</h2>
    <div class="box secondary">
      <div class="arrow">
        <i class="fas fa-chevron-left"></i>
      </div>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <div class="arrow">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
  <div class="box outer is-flex-direction-column">
    <h2 class="title is-2">Horror</h2>
    <div class="box secondary">
      <div class="arrow">
        <i class="fas fa-chevron-left"></i>
      </div>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <div class="arrow">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
  <div class="box outer is-flex-direction-column">
    <h2 class="title is-2">Travel</h2>
    <div class="box secondary">
      <div class="arrow">
        <i class="fas fa-chevron-left"></i>
      </div>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <BookThumbnail class="book-page"/>
      <div class="arrow">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import BookThumbnail from "@/components/BookThumbnail";
export default {
  name: "BooksSection",
  components:{
    BookThumbnail,
  },
}
</script>

<style scoped>
  .outer {
    margin-top: 5%;
    padding: 0;
    margin-bottom: 2%;
  }
  .arrow {
    color: #b8b7b7;
    font-size: 5rem;
    height: 25rem;
    width: 3%;
    cursor: pointer;
  }
  .fas {
    margin-top: 10rem;
  }
  .secondary {
    height: 70%;
    display: flex;
    padding: 0;
  }
  h2 {
    height: 20%;
    font-family: 'Yeseva One', cursive;
  }
  div {
    box-shadow: none;
  }
  .book-page {
    display: inline-block;
    width: 17%;
    margin-left: 1%;
  }
  .book-page:hover {
    box-shadow: 3px 3px 9px darkgrey;
    z-index: 999;
  }
  .arrow:hover, .book-page:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
</style>