<template>
  <div class="dropdown">
    <button class="bi-list ml-2" type="button" id="dropdownMenuButton"
            style="color: gray; font-size: 2rem; border: none; background-color: transparent "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a @click="editProfile" class="dropdown-item" id="editProfile" href="#">Edit profile</a>
      <a class="dropdown-item" id="conversations" href="#">Conversations</a>
      <a @click="logout" class="dropdown-item" id="logout" href="#">Logout</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import state from "@/state";
import {reactive} from "@vue/reactivity";

export default {
  name: "DropDownMenu",
  /*  logoutButton: '#logout',*/
  setup() {
    const user = reactive(state);
    const model = state.toModel();


    async function logout() {
      await axios.get('/api/account/logout',  {
        headers: {
          'Authorization': 'Bearer ' + user.user.AccessToken,
        },}
        )
          .then((response) => {
            if (response.status === 200) {
              console.log("Success")
              state.successMessage.value = "You are logged out."
              user.user.loggedIn = "false";
              user.user.AccessToken = "";
              user.user.RefreshToken = "";
              user.user.TokenExpirationTime = "";
            }
            console.log(response);
          }, (error) => {
            state.successMessage.value = "Failed logged out."
            console.log(error.message);
          });
    }


    return {
      logout
    }
  }
}
</script>

<style scoped>

</style>