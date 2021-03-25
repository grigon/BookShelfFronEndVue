<template>
  <MainNavView/>
  <Message :message="successMessage"/>
  <Message :errorMessage="errorMessage"/>
  <UserProfileForm/>
</template>

<script>
import MainNavView from "./MainNavView";
import UserProfileForm from "../components/UserProfileForm";
import Message from "../components/Message";

export default {
  components: {
    Message,
    UserProfileForm,
    MainNavView
  },
}
</script>

<style scoped>

</style>