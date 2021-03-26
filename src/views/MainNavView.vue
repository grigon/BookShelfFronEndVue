<template xmlns="http://www.w3.org/1999/html">
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between sticky-top">
    <div class="container-fluid">
      <router-link to="/MainPage">
      <a alt="BookShelf" class="navbar-brand logo" href="#"/>
        </router-link>
    </div>
    <div class="container-fluid">
      <form class="form-inline my-2 my-lg-0">
        <input id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div class="container-fluid d-flex justify-content-end">
      <form class="form-inline my-2 my-lg-0">
        <button v-if="user.user.loggedIn!=='true'" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal"
               @click="state.clearMessages()" >
          Sign up
        </button>
        <button v-if="user.user.loggedIn!=='true'" type="button" class="btn btn-outline ml-2" data-toggle="modal" data-target="#modalSignIn"
                @click="state.clearMessages()" >
          Sign in
        </button >
        <DropDownMenu v-if="user.user.loggedIn==='true'"/>
      </form>
    </div>
  </nav>
  <SignInForm/>

<Modal><SignUpForm/></Modal>

<!--<Modal><SignUpForm/></Modal>-->
<!--
  <SignInForm/>
-->


</template>

<script>
import Modal from "../components/Modal";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import state from "@/state";
import {reactive} from "@vue/reactivity";
import DropDownMenu from "../components/DropDownMenu";

export default {
  components: {
    DropDownMenu,
    SignUpForm,
    SignInForm,
    Modal
  },
  setup(props) {
    const user = reactive(state);
    const model = state.toModel();

    return {
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      model,
      user,
    };

  }
}

</script>

<style scoped>

</style>