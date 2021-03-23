<template>
Dupa
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

</template>

<script>
export default {
  name: "UserProfileForm"
}
</script>

<style scoped>

</style>