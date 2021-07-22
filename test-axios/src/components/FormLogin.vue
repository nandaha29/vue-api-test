<template>
  <div class="container">
    <form @submit.prevent="LOGIN()">
      <!-- alert -->
      <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
        {{ this.messageStatus == "false" ? "errorMessage " : "successMessage" }}
      </b-alert>

      <!-- email -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailDiForm" />
      </div>
      <!-- password -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input :type="typePassword" v-model="password" class="form-control" id="exampleInputPassword1" />
      </div>

      <button type="submit" class="btn btn-primary" @click="showDismissibleAlert = true">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // variabel default
      emailDiForm: "",
      password: "",
      messageStatus: "",
      alertVariant: "success",
      typePassword: "password",
      showDismissibleAlert: false,
    };
  },
  name: "FormLogin",
  methods: {
    LOGIN() {
      // * buat ngirim  data tipe value text
      const formData = {
        email: this.emailDiForm,
        password: this.password,
      };
      this.axios
        .post("account/login", formData)
        .then((response) => {
          const successMessage = "Selamat datang~";
          this.showSuccessAlert(successMessage);
          console.log("success", response.data);
          setTimeout(function() {
            this.$router.push("/home");
          }, 3000);
        })
        .catch((error) => {
          console.log("invalid email or password", error.response.data);
          const errorMessage = "invalid email or password";
          this.showErrorAlert(errorMessage);
        });
    },
    showSuccessAlert(berhasilnihboshh) {
      this.alertVariant = "success";
      this.messageStatus = berhasilnihboshh;
      this.showDismissibleAlert = true;
    },
    showErrorAlert(errorugjijnkgufd) {
      this.alertVariant = "danger";
      this.messageStatus = errorugjijnkgufd;
      this.showDismissibleAlert = true;
    },
  },
};
</script>

<style></style>

<!--  
=> yg belum hehe
* alert message salah password or email
* send kode OTP tuk verifikasi
* 

=> Method itu yang pake tanda (), sisanya variable
=> Gampangnya sih, semua variable yang keliatan, entah itu di v-model, di method, di v-for, dipanggil di html pake {{}}, itu harus ada di return data() nya.
  Terus kalo manggilnya gak di html, pake this.variable gitu. Kalo di html kan pake {{variable}}
=> Kecuali variable itu dibikin sendiri ya pake const atau var

-->
