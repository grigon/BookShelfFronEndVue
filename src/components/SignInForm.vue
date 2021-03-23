<template>
  <div class="modal fade" id="modalSignIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                           type="text"
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
<!--  <pre>{{ model.user.$model }}</pre>-->
</template>


<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import axios from 'axios';
import Message from "./Message";
import MainNavView from "../views/MainNavView";
import Modal from "./Modal";
import {watch} from "vue";
import axiosConfig from "../axiosConfig";

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
  setup(props, {emit}) {
    const user = reactive(state);
    const model = state.toModel();

    function startTokenWatch() {
      window.setInterval(() => {
        checkToken()
      }, 3000)
    }

    function checkToken() {
      if ((new Date(user.user.TokenExpirationTime).getTime() - Date.now()) / 1000 <= 30) {
        refreshToken()
      }
    };

    async function refreshToken() {
      await axiosConfig.get('/api/account/RefreshAccessToken', {
            "headers": {
              "RefreshToken": user.user.RefreshToken
            }
          }
      )
          .then((response) => {
            if (response.status === 200) {
              console.log("Success Access Token Refreshed")
              user.user.loggedIn = "true";
              user.user.AccessToken = response.data.value.token;
              user.user.TokenExpirationTime = response.data.value.expiration;
            }
            console.log(response);
          }, (error) => {
            state.successMessage.value = "Failed refresh Access token."
            user.user.loggedIn = "false";
            console.log(error.message);
          });
    }


    async function onSave() {
      await axios.post('/api/account/login', {
        email: user.user.email,
        password: user.user.password,
      })
          .then((response) => {
            if (response.status === 200) {
              console.log("Success")
              state.successMessage.value = "Success! You are logged in."
              user.user.loggedIn = "true";
              user.user.AccessToken = response.data.value.token;
              user.user.RefreshToken = response.data.value.refreshToken;
              user.user.TokenExpirationTime = response.data.value.expiration;
              startTokenWatch()
            }
            console.log(response);
          }, (error) => {
            console.log(error.message);
          });
    }

    return {
      successMessage: state.successMessage,
      model,
      user,
      onSave,
    };
  }
}

</script>
