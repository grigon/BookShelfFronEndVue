<template>
  <div class="dropdown">
    <button class="bi-list ml-2" type="button" id="dropdownMenuButton"
            style="color: gray; font-size: 2rem; border: none; background-color: transparent "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <router-link to="/UserProfile" class="dropdown-item" id="editProfile">Edit profile</router-link>
      <a class="dropdown-item" id="conversations" href="#">Conversations</a>
      <a @click="logout" class="dropdown-item" id="logout" href="#">Logout</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import axiosConfig from "../axiosConfig";
import state from "@/state";
import {reactive} from "@vue/reactivity";
import router from "../router";

export default {
  name: "DropDownMenu",
  /*  logoutButton: '#logout',*/
  setup() {
    const user = reactive(state);
    const model = state.toModel();


    async function logout() {
      await axiosConfig.get('/api/account/logout',  {
        }
        )
          .then((response) => {
            if (response.status === 200) {
              console.log("Success")
              state.successMessage.value = "You are logged out."
              user.user.loggedIn = "false";
              user.user.AccessToken = "";
              user.user.email = "";
              user.user.name = "";
              user.user.city = "";
              user.user.password = "";
              user.user.RefreshToken = "";
              user.user.TokenExpirationTime = "";
              localStorage.setItem("loggedIn", "");
              localStorage.setItem("city", "");
              localStorage.setItem("photoPath", "");
              localStorage.setItem("name", "");
              localStorage.setItem("RefreshToken", "");
              localStorage.setItem("TokenExpirationTime", "");
              localStorage.setItem("AccessToken", "");
              router.push({ name: 'MainPage'});
            }
            console.log(response);
          }, (error) => {
            state.successMessage.value = "Failed logged out."
            user.user.loggedIn = "";
            localStorage.setItem("loggedIn", user.user.loggedIn);
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