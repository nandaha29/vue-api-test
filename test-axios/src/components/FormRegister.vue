<template>
  <div class="container">
    <form @submit.prevent="REGISTER()">
      <!-- name -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="name" class="form-control" id="exampleInputName" aria-describedby="name" v-model="nameDiForm" />
      </div>
      <!-- email -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailDiForm" />
      </div>
      <!-- password -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input :type="typePassword" class="form-control" id="exampleInputPassword1" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // variabel default
      nameDiForm: "",
      emailDiForm: "",
      password: "",
      message: "",
      typePassword: "password",
    };
  },
  name: "FormRegister",
  methods: {
    REGISTER() {
      //  * buat ngirim data ex kirim gambar
      // const formData = new FormData();
      // formData.append("name", this.name);
      // formData.append("email", this.email);
      // formData.append("password", this.password);

      // * buat ngirim  data tipe value text
      const formData = {
        name: this.nameDiForm,
        email: this.emailDiForm,
        password: this.password,
      };

      this.axios
        .post("/account/register", formData)
        .then((response) => {
          console.log('success',response.data);
          // this.$router.push({ name: "Login" }); // ini kalo name / nama route
          this.$router.push("/login"); // ini kalo langsung path
        })
        .catch((error) => {
          // console.log(error.response);
          console.log("error", error.response.data);
        });
    },
  },
};
</script>

<style></style>

<!--  
* v-on:submit.prevent="WHOAMI()" -> untuk
-->
