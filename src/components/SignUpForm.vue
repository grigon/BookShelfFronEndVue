npr
<template>


  <form novalidate @submit.prevent="onSave">
    <div class="row">

      <div class="container-fluid d-flex justify-content-center">


        <div class="col-md-10 r">

          <div>
            <h3>Sign up</h3>
          </div>
          <div><strong>User inforamation</strong></div>

          <Message :message="successMessage"/>

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
                   type="text"
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

</template>

<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import axios from 'axios';
import Message from "./Message";

export default {
  components: {
    Message,
    ValidationMessage,
  },
  emits: [
    "onError"
  ],
  setup(props, {emit}) {
    const user = reactive(state);
    const model = state.toModel();

    async function onSave() {
      await axios.post('https://localhost:5001/api/users', {
        userName: user.user.name,
        email: user.user.email,
        password: user.user.password,
        city: user.user.city
      })
          .then((response) => {
            if(response.statusText === "Created"){
              console.log("Success")
              state.successMessage.value = "Success! Account was created."
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
