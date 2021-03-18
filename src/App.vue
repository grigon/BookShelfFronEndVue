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

export default {
  components:{
    MainPageView,
    MainNavView,
    SignUpForm,
    Error,
    Message
  },
  setup(){
    return{
      errorMessage: state.errorMessage,
    }
  }
}
</script>