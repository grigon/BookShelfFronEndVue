<template>
  <div>
    <div class="alert alert-success" v-if="successMessage">{{successMessage}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props: {
    successMessage: {
      type: String,
      required: true
    }
  },
  setup(props){
    console.log(props.successMessage)
    return{

    };
  }
}
</script >