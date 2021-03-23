<template>
  <MainNavView/>
  <MessageWhite/>
  <MessageOrange/>
  <ButtonOrange/>
  <ButtonWhite/>
</template>

<script>
import MainNavView from "./MainNavView";
import MessageWhite from "../atoms/MessageWhite";
import MessageOrange from "../atoms/MessageOrange";
import ButtonOrange from "../atoms/ButtonOrange";
import ButtonWhite from "../atoms/ButtonWhite";

export default {
  components:{
    MainNavView,
    MessageWhite,
    MessageOrange,
    ButtonOrange,
    ButtonWhite
  }
}
</script>