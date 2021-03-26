<template>
  <div class="modal fade" id="modalSignIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="state.clearMessages()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form novalidate @submit.prevent="onSave">
            <div class="row">
              <div class="container-fluid d-flex justify-content-center">
                <div class="col-md-10 r">
                  <div>
                    <h3>Sign in</h3>
                  </div>
                  <div><strong>Please provide access data</strong></div>
                  <br/>
                  <Message :message="successMessage"/>
                  <Message :errorMessage="errorMessage"/>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email"
                           type="text"
                           class="form-control"
                           placeholder="email@adress.com"
                           v-model="model.user.email.$model"
                    />
                    <ValidationMessage :model="model.user.email"/>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password"
                           type="password"
                           class="form-control"
                           placeholder=""
                           v-model="model.user.password.$model"
                    />
                  </div>
                  <div class="form-group d-flex justify-content-end">
                    <button type="submit"
                            class="btn btn-primary"
                            :disabled="model.user.email.$invalid">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>


<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import axios from 'axios';
import Message from "./Message";
import MainNavView from "../views/MainNavView";
import Modal from "./Modal";
import axiosConfig from "../axiosConfig";
import router from "../router";

export default {
  components: {
    Modal,
    Message,
    ValidationMessage,
    MainNavView

  },
  emits: [
    "onError"
  ],
  setup(props, {}) {
    const user = reactive(state);
    const model = state.toModel();

    function startTokenWatch() {
      window.setInterval(() => {
        checkToken()
      }, 5000)
    }

    function checkToken() {
      if ((new Date(user.user.TokenExpirationTime).getTime() - Date.now()) / 1000 <= 30) {
        refreshToken()
      }
    };

    async function refreshToken() {
      await axiosConfig.get(`/api/account/RefreshAccessToken/${localStorage.getItem("Id")}`, {
            "headers": {
              "RefreshToken": localStorage.getItem("RefreshToken")
            }
          }
      )
          .then((response) => {
            console.log(response)
            if (response.status === 200) {
              console.log("Success. Access Token Refreshed")
              user.user.loggedIn = "true";
              user.user.AccessToken = response.data.value.token;
              user.user.TokenExpirationTime = response.data.value.expiration;
              localStorage.setItem("TokenExpirationTime", user.user.TokenExpirationTime);
              localStorage.setItem("AccessToken", user.user.AccessToken);
            }
            console.log(response);
          }, (error) => {
            state.successMessage.value = "Failed refresh Access token."
            user.user.loggedIn = "false";
            console.log(error.message);
          });
    }


    async function onSave() {
      state.clearMessages();
      await axios.post('/api/account/login', {
        email: user.user.email,
        password: user.user.password,
      })
          .then((response) => {
            if (response.status === 200) {
              console.log("Success")
              state.successMessage.value = "Success! You are logged in."
              user.user.loggedIn = "true";
              localStorage.setItem("loggedIn", user.user.loggedIn);
              user.user.AccessToken = response.data.value.token;
              user.user.RefreshToken = response.data.value.refreshToken;
              localStorage.setItem("RefreshToken", user.user.RefreshToken);
              user.user.TokenExpirationTime = response.data.value.expiration;
              localStorage.setItem("TokenExpirationTime", user.user.TokenExpirationTime);
              localStorage.setItem("Id", response.data.value.id)
              startTokenWatch()
              router.push({ name: 'MainPage'});
              state.clearMessages();
              state.successMessage.value = "Success! You are logged in."
            }
          }, (error) => {
            state.clearMessages();
            state.errorMessage.value = "Wrong email or password"
            console.log(error.message);
          });
    }

    return {
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      state,
      model,
      user,
      onSave,
      refreshToken
    };
  }
}

</script>
