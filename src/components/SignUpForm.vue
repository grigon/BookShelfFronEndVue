<template>
  <Modal>
    <form novalidate @submit.prevent="onSave">
      <div class="row">
        <div class="container-fluid d-flex justify-content-center">
          <div class="col-md-10 r">
            <div>
              <h3>Sign up</h3>
            </div>
            <div><strong>User inforamation</strong></div>
            <Message :message="successMessage"/>
            <Message :errorMessage="errorMessage"/>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name"
                     type="text"
                     class="form-control"
                     placeholder="Your Name"
                     v-model="model.user.name.$model"
              />
              <ValidationMessage :model="model.user.name"/>
            </div>
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
              <ValidationMessage :model="model.user.password"/>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input id="city"
                     type="text"
                     class="form-control"
                     placeholder=""
                     v-model="model.user.city.$model"
              />
              <ValidationMessage :model="model.user.city"/>
            </div>

            <div class="form-group d-flex justify-content-end">
              <button type="submit"
                      class="btn btn-primary"
                      :disabled="model.user.$invalid">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>
      <!--    <pre>{{ model.user.$model }}</pre>-->
    </div>
  </Modal>
</template>

<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import axios from 'axios';
import Message from "./Message";
import MainNavView from "../views/MainNavView";
import Modal from "./Modal";

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

    async function onSave() {
      state.clearMessages();
      await axios.post('/api/users', {
        userName: user.user.name,
        email: user.user.email,
        password: user.user.password,
        city: user.user.city
      })
          .then((response) => {
            console.log(response);
            if (response.statusText === "Created") {
              console.log("Success")
              localStorage.setItem("Id", response.data.id)
              user.user.id = response.data.id
              state.clearMessages();
              state.successMessage.value = "Success! Account was created."
            }

          }, (error) => {
            state.errorMessage.value = error.response.data[0].description
            console.log(error.response.data[0].description);
          })
    }

    return {
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      model,
      user,
      onSave,
    };
  }
}

</script>
