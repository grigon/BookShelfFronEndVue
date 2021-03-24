<template>
  <MainNavView/>
  <h2 class="title is-3">Conversation</h2>
  <div class="is-flex-direction-row">
    <div class="block left is-flex-direction-column">
      <div class="block first has-background-light">
        <MessageWhite/>
        <MessageOrange/>
        <MessageWhite/>
        <MessageOrange/>
      </div>
      <div class="block second is-flex-direction-column">
        <h2 class="title is-3">Write message</h2>
        <Textarea class="message"/>
        <ButtonOrange class="submit"/>
      </div>
    </div>
    <div class="block right">
      <ButtonWhite/>
    </div>
  </div>
</template>

<script>
import MainNavView from "./MainNavView";
import MessageWhite from "../atoms/MessageWhite";
import MessageOrange from "../atoms/MessageOrange";
import ButtonOrange from "../atoms/ButtonOrange";
import ButtonWhite from "../atoms/ButtonWhite";
import Textarea from "@/atoms/Textarea";

export default {
  components:{
    Textarea,
    MainNavView,
    MessageWhite,
    MessageOrange,
    ButtonOrange,
    ButtonWhite
  }
}
</script>

<style scoped>
  h2 {
    width: 100%;
    margin: 3%;
  }
  .is-flex-direction-row {
    display: flex;
  }
  .has-background-light {
    overflow-y: scroll;
    height: 55%;
    padding: 5%;
    border-radius: 1%;
  }
  .left {
    display: flex;
    width: 50%;
  }
  .right {
    background-color: yellow;
    height: 200px;
    width: 50%;
  }
  .is-flex-direction-column {
    display: flex;
  }
  .second {
    width: 100%;
  }
  .title {
    font-family: 'Yeseva One', cursive;
  }
  .message {
    margin-left: 2%;
  }
  .submit {
    margin-left: 34%;
    width: 14%;
  }
</style>