<template>
  <form @submit.prevent="onSave">
    <div class="container-fluid col-md-6">
      <h3>Edit Profile</h3>

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
      <fieldset disabled>
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
      </fieldset>
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
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import Message from "./Message";
import MainNavView from "../views/MainNavView";
import axiosConfig from "../axiosConfig";

export default {
  components: {
    Message,
    ValidationMessage,
    MainNavView

  },

  setup() {
    const user = reactive(state);
    const model = state.toModel();

    async function onSave() {
      await axiosConfig.put('/api/account/', {
        userName: user.user.name,
        email: user.user.email,
        city: user.user.city,
        photoPath: user.user.photoPath
      })
          .then((response) => {
            if (response.status === 200) {
              console.log("Success")
              state.successMessage.value = "Success! User information saved."
            }
            console.log(response);
          }, (error) => {
            console.log(error.message);
          });
    }

    return {
      user,
      model,
      onSave
    }
  }
}
</script>

<style scoped>

</style>