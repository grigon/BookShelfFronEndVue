<template>
  <MainNavView/>
  <Message :message="successMessage"/>
  <Message :errorMessage="errorMessage"/>
  <UserProfileForm/>
</template>

<script>
import state from "@/state";
import MainNavView from "./MainNavView";
import UserProfileForm from "../components/UserProfileForm";
import Message from "../components/Message";
import {reactive} from "@vue/reactivity";

export default {



  components: {
    Message,
    UserProfileForm,
    MainNavView
  },

  setup(){

    return{
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      state,
    }

  }

}
</script>

<style scoped>

</style>