<template>
  <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <SignUpForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "./SignUpForm";
export default {
name: "Modal",
  components: {SignUpForm}
}
</script>

<style scoped>

</style>