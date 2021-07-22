<template>
  <div class="container">
    <!-- manggil output yg di variable secara realtime -->
    <!-- <pre>{{ emailDiForm }}</pre> -->
    <form @submit.prevent="LOGIN()">
      <!-- alert -->
      <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
        <!-- {{ this.messageStatus ? (this.messageStatus = "showErrorAlert()") : (this.messageStatus = "showSuccessAlert()") }} -->
        {{ this.messageStatus ? "showErrorAlert()" : "showSuccessAlert()" }}
      </b-alert>

      <!-- email -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailDiForm" />
      </div>
      <!-- password -->
      <div class="mb-3">
        <!-- versi 1 -->
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input :type="typePassword" v-model="password" class="form-control" id="exampleInputPassword1" />
        <!-- versi 2
        <b-form-input v-model="password" :type="typePassword" :state="validation" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Your user ID must be 5-12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Looks Good.
        </b-form-valid-feedback> -->
        <!-- 
          variabel yg bisa diganti ganti (typePassword) 
        :type="typePassword" -> shorthand v-bind
        -->
      </div>
      <!-- see password 
      <input type="checkbox" v-model="seePassword" /> -->
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
      // seePassword: "",
      typePassword: "password",
      showDismissibleAlert: false,
    };
  },
  name: "FormLogin",
  methods: {
    LOGIN() {
      // * utk check call LOGIN
      // console.log(data1, data2);
      // console.log(this.LOGIN);
      // return;
      //  * buat ngirim data ex kirim gambar
      // const formData = new FormData();
      // formData.append("email", this.email);
      // formData.append("password", this.password);
      // --------------------------------------------
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
          this.$router.push("/home", 3000);
        })
        .catch((error) => {
          console.log("invalid email or password", error.response.data);
          const errorMessage = "invalid email or password";
          this.showErrorAlert(errorMessage);
        });
    },
    // showAlert() {
    //   // * cara panjang
    //   if (this.showAlert) {
    //     this.showDismissibleAlert = "error";
    //   } else {
    //     this.showDismissibleAlert = "success";
    //   }
    // },
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
  // buat mantau perubahan variabel
  watch: {
    // method
    seePassword() {
      // * cara panjang
      //   if (this.seePassword) {
      //     this.typePassword = "text";
      //   } else {
      //     this.typePassword = "password";

      // * cara pendek
      this.seePassword ? (this.typePassword = "text") : (this.typePassword = "password");
    },
    //  buat memantau perubahan buat perhitungan -> realtime
    computed: {
      validation() {
        return this.password.length > 4 && this.password.length < 13;
      },
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


=> GA DIPAKAI
-->
