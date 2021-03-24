<template>
  <div class="box is-flex-direction-row">
    <div></div>
    <BookThumbnail/>
    <BookThumbnail/>
    <BookThumbnail/>
    <BookThumbnail/>
    <BookThumbnail/>
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
  .box {
    margin-top: 5%;
    background-color: deeppink;
    width: 100%;
    display: flex;
  }
</style>