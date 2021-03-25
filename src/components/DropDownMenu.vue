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
              state.clearUserData();
              router.push({ path: '/MainPage' })
            }
            console.log(response);
          }, (error) => {
            state.successMessage = "Failed logged out on server."
            state.clearUserData();
            console.log(error.message);
            router.push({ path: '/MainPage' })
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