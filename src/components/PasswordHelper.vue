<template>

</template>

<script>
export default {
  data() {
    return {
      password: '',
      has_minimum_lenth: false,
      has_number: false,
      has_lowercsae: false,
      has_uppercase: false,
      has_special: false,
    }
  },
  watch:{
    password(){
      this.has_minimum_lenth = (this.password.length > 8);
      this.has_number    = /\d/.test(this.password);
      this.has_lowercase = /[a-z]/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special   = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
    }
  }
}
</script>

<style scoped>

</style>