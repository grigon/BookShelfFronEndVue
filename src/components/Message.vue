<template>
    <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
      {{message}}
<!--      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>-->
    </div>
  <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="errorMessage">
    {{errorMessage}}
<!--    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>-->
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    }
  },
  setup(props){
    console.log(props.message)
    return{

    };
  }
}
</script >