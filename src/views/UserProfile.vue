<template>
  <MainNavView/>
  <UserProfileForm/>
 
  <!-- <MainChatView/> -->
</template>

<script>
import MainNavView from "./MainNavView";
import UserProfileForm from "../components/UserProfileForm";
// import MainChatView from "../components/Chats/MainChatView";




export default {
  components: {
    UserProfileForm,
    MainNavView,
    // MainChatView
  },
}
</script>

<style scoped>

</style>