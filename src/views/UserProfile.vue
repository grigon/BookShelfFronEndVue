<template>
  <MainNavView/>
  <UserProfileForm/>
</template>

<script>
import MainNavView from "./MainNavView";
import UserProfileForm from "../components/UserProfileForm";

export default {
  components: {
    UserProfileForm,
    MainNavView
  },
}
</script>

<style scoped>

</style>