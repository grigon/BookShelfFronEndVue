<template>
  <div>
    <Error :message="errorMessage"/>
    <MainPageView/>
  </div>
</template>

<script>
import Error from "@/components/Error";
import state from "@/state";
import config from "@/config";
import MainNavView from "./views/MainNavView";
import MainPageView from "./views/MainPageView";
import SignUpForm from "./components/SignUpForm";

export default {
  components:{
    MainPageView,
    MainNavView,
    SignUpForm,
    Error,
    config
  },
  setup(){
    return{
      errorMessage: state.errorMessage,
    }
  }
}
</script>