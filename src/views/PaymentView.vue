npr
<template>
  <div>
    <h3>Sign up</h3>

  </div>
  <form novalidate @submit.prevent="onSave">
    <div class="row">
      <div class="col-md-6">
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

        <div class="form-group">
          <input type="Sign up"
                 value="Next"
                 class="btn btn-success"
                 :disabled="model.user.$invalid"
          />
        </div>
      </div>
    </div>
  </form>

  <div>
    <pre>{{ payment }}</pre>
  </div>

</template>

<script>
import states from "@/lookup/states";
import months from "@/lookup/months";
import formatters from "@/formatters";
import AddressView from "@/views/AddressView";
import state from "@/state";
import {reactive} from "@vue/reactivity";
import ValidationMessage from "@/components/ValidationMessage";

export default {
  components: {
    ValidationMessage,
    AddressView,
  },
  emits: [
    "onError"
  ],
  setup(props, {emit}) {
    const payment = reactive(state);

    async function onSave() {
      if ( await model.password.value.$validate()){
        state.errorMessage.value = "Dupa";
      }

    }
    const model = state.toModel();

    return {
      model,
      payment,
      states,
      onSave,
      ...formatters,
      months,
    };
  }
}

</script>
