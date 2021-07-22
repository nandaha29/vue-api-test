<template>
  <div class="container">
    <h1>WHOAMI</h1>

    <!-- <pre>{{ app.message }}</pre> -->
    <b-card-group deck class=" m-5">
      <b-card border-variant="info" header="this.message = selamat datang, ${response.data.data.user.name}" align="center">
        <b-card-text> {response.data.data.user.name}</b-card-text>
        <b-card-text>{response.data.data.user.email}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      jwt: "",
      message: "",
    };
  },
  methods: {
    whoAmI() {
      // * buat ngirim  data tipe value text
      const formData = {
        email: this.emailDiForm,
        password: this.password,
      };
      this.axios
        .post("/whoami", formData)
        .then((response) => {
          console.log(response.data);
          // this.message = 'selamat datang', ${response.data.data.user.name};
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style></style>
