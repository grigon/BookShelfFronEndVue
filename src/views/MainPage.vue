<template>
  <MainNavView/>
  <BooksSection/>
</template>

<script>
import MainNavView from "./MainNavView";
import BooksSection from "@/components/BooksSection";

export default {
  components:{
    MainNavView,
    BooksSection,
  }
}
</script>