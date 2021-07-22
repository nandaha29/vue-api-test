<template>
  <div class="login">
    <h1>Login</h1>
    <FormLogin msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin.vue";

export default {
  name: "LoginPage",
  components: {
    FormLogin,
  },
};
</script>

<style></style>
