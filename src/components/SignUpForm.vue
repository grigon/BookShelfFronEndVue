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
    <pre>{{ model.user }}</pre>
  </div>

</template>

<script>
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";
import config from "@/config";
import axios from 'axios';

export default {
  components: {
    ValidationMessage,
  },
  emits: [
    "onError"
  ],
  setup(props, {emit}) {
    const user = reactive(state);

    async function onSave() {
      axios.post(config.server + 'api/users', {
        user
      })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    const model = state.toModel();

    return {
      model,
      user,
      onSave,
    };
  }
}

</script>
