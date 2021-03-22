<template>
  <div>
    <Error :message="errorMessage"/>
    <MainPageView/>
  </div>
</template>

<script>
import Error from "@/components/Error";
import Message from "./components/Message";
import state from "@/state";
import MainNavView from "./views/MainNavView";
import MainPageView from "./views/MainPageView";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import {reactive} from "@vue/reactivity";
import axios from "axios";

const user = reactive(state);

export default {
  components:{
    MainPageView,
    MainNavView,
    SignUpForm,
    SignInForm,
    Error,
    Message
  },
  setup(){
    return{
      errorMessage: state.errorMessage,
      state
    }
  }
}
</script>