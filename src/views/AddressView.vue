<template>
  <div class="border rounded p-2">
    <slot/>
    <div class="form-group">
      <label for="address1">Address</label>
      <input id="address1"
             type="text"
             class="form-control"
             placeholder="Street adress"
             v-model="address.address1.$model"
             :disabled="isDisabled"
      />
      <ValidationMessage :model="address.address1"/>
    </div>
    <div class="form-group">
      <label for="address2">Suite/Apartment</label>
      <input id="address2"
             type="text"
             class="form-control"
             placeholder="Suite/Apartment"
             v-model="address.address2.$model"
             :disabled="isDisabled"
      />
      <ValidationMessage :model="address.address2"/>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="city">City</label>
        <input id="city"
               type="text"
               class="form-control"
               placeholder="e.g. New York"
               v-model="address.city.$model"
               :disabled="isDisabled"
        />
        <ValidationMessage :model="address.city"/>
      </div>
      <div class="form-group col-md-3 ">
        <label for="zip">Zip Code</label>
        <input id="zip"
               type="text"
               class="form-control"
               placeholder="e.g.  00-000"
               v-model="zipcode"
               :disabled="isDisabled"
        />
        <ValidationMessage :model="address .zip"/>
      </div>
      <div class="form-group col-md-3 ">
        <label for="state">State</label>
        <select
            id="state"
            class="form-control"
            v-model="address.state.$model"
            :disabled="isDisabled"
        >
          <option v-for="s in states"
                  :key="s.abbreviation"
                  :value="s.abbreviation"
          >{{ s.name }} {{ stateFormat(s) }}
          </option>
          <option>LA</option>
          <option>FL</option>
          <option>AL</option>
        </select>
        <ValidationMessage :model="address.state"/>
      </div>
    </div>
  </div>
</template>

<script>
import states from "@/lookup/states";
import formatters from "@/formatters";
import ValidationMessage from "@/components/ValidationMessage";

export default {
  components: {ValidationMessage},
  props: {
    address: {
      type: Object
    },
    isDisabled: {
      type: Boolean
    }
  },
  setup(props) {
    return {
      states,
      ...formatters,
    }
  },
};

</script>
