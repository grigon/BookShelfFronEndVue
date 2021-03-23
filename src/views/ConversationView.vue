<template>
  <MainNavView/>
  <div class="is-flex-direction-row">
    <div class="block left is-flex-direction-column">
      <div class="block first has-background-light">
        <MessageWhite/>
        <MessageOrange/>
        <MessageWhite/>
        <MessageOrange/>
      </div>
      <div class="block second">
        <ButtonOrange/>
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

<style scoped>
  .is-flex-direction-row{
    display: flex;
  }
  .has-background-light{
    border: 2px #ea3918;
    border-radius: 1%;
    overflow-y: scroll;
    height: 65%;
  }
  .left {
    display: flex;
    width: 50%;
  }
  .right {
/*    background-color: yellow;*/
    height: 200px;
    width: 50%;
  }
  .first{
    background-color: aquamarine;
  }
  .second{
    background-color: blue;
    align-self: center;
  }
</style>