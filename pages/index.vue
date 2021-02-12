<template>
  <div class="body">
<div class="container">
  <div class="row justify-content-center align-items-center login-row">
    <div class="form">
      <div class="info" style="background-color: #fff !important;">
      <h4 class="w-100 text-center mt-10">أحمد السولية</h4>
      <p class="w-100 text-center login-header-information">
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.543 0.894249L5.41808 8.01922L2.16055 4.76169C1.77639 4.37761 1.15366 4.37761 0.769502 4.76169C0.385426 5.14585 0.385426 5.76858 0.769502 6.15274L4.72255 10.1058C4.91463 10.2978 5.16635 10.3939 5.41808 10.3939C5.6698 10.3939 5.92152 10.2978 6.1136 10.1058L13.934 2.28538C14.3181 1.90122 14.3181 1.27848 13.934 0.894328C13.5499 0.510172 12.927 0.510172 12.543 0.894249Z"
            fill="#FD7B38"
          />
        </svg>
        تسجيل حضور
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.543 0.894249L5.41808 8.01922L2.16055 4.76169C1.77639 4.37761 1.15366 4.37761 0.769502 4.76169C0.385426 5.14585 0.385426 5.76858 0.769502 6.15274L4.72255 10.1058C4.91463 10.2978 5.16635 10.3939 5.41808 10.3939C5.6698 10.3939 5.92152 10.2978 6.1136 10.1058L13.934 2.28538C14.3181 1.90122 14.3181 1.27848 13.934 0.894328C13.5499 0.510172 12.927 0.510172 12.543 0.894249Z"
            fill="#FD7B38"
          />
        </svg>
        الامتحانات
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.543 0.894249L5.41808 8.01922L2.16055 4.76169C1.77639 4.37761 1.15366 4.37761 0.769502 4.76169C0.385426 5.14585 0.385426 5.76858 0.769502 6.15274L4.72255 10.1058C4.91463 10.2978 5.16635 10.3939 5.41808 10.3939C5.6698 10.3939 5.92152 10.2978 6.1136 10.1058L13.934 2.28538C14.3181 1.90122 14.3181 1.27848 13.934 0.894328C13.5499 0.510172 12.927 0.510172 12.543 0.894249Z"
            fill="#FD7B38"
          />
        </svg>

        المتابعة
      </p>
      <p class="w-100 text-center">من خلال منصة واحدة</p>
        </div>
      <div class="form-content">
        <h5 class="w-100 text-center">تسجيل الدخول</h5>

        <div class="error_login_massege"></div>
        <div class="form-group">
          <label for="userlogininput">اسم المستخدم</label>
          <input
            type="text"
            name="user"
            class="form-control user-login-input w-100"
            id="userlogininput"
            required
            v-model="form.user"
          />
        </div>
        <div class="form-group">
          <label for="password">كلمة السر</label>
          <input
            type="password"
            name="password"
            v-model="form.password"
            required
            class="form-control user-login-input w-100"
            id="password"
          />
        </div>
        <div class="button">
          <div class="button-abs">
            <a
              class="ok-button w-100 text-center"
              id="loginbutton"
              @click="postLogin"
            >
              دخول
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import axios from "axios";
var myglobal = "aa";
const myglobal2 = "aa2";
export default {
  layout: 'log',
  middleware: "notAuthenticated",

  data: () => ({
    form: {
      user: "",
      password: "",
    }
  }),

  methods: {
    postLogin() {
      var myglobalstore = this.$store;
      var myglobalrouter = this.$router;
      axios({
        method: "post",
        url: "https://medico.ahmedhesham.systems/api/login",
        data: new URLSearchParams(this.form),
      })
        .then(function(response) {
          console.log(response.data);
          if (response.data.msg == "login sucssfully") {
            setTimeout(() => {
              const auth = {
                accessToken: response.data.token,
              };
              //myglobalstore.commit("setAuth", auth); // mutating to store for client rendering
              Cookie.set("auth", auth); // saving token in cookie for server rendering
              localStorage.setItem("auth", auth)
              myglobalrouter.push("/home");
            }, 1000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.container{
  text-align:center;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
a{
text-decoration: none;
    color: #fff !important;
    font-weight: bolder;
}
.button-abs{
  margin-top: 5%;
}
.ok-button {
  padding: 2% 9%;
  margin-top:2%;
  background-color: #27AE60;
}

.refuse-button {
  background-color: #EB5757;
}

.show-button {
  background-color: #2F80ED;
}

input {
  background-color: #f8f8f8 !important;
  border: none !important;
  color: #242424;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none !important;
  background: url("./images/selectarrow.svg") #fd7b38 no-repeat 0 !important;
  /* Better placement regardless of input width */
  background-color: #f8f8f8 !important;
  color: #242424;
}

label {
  color: #fd7b38 !important;
  font-weight: bold !important;
  margin-bottom: 4%;
}
body{
  background-color: #f7f6f4 !important;

}
.body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: #242424;
  font-family: "Tajawal", "Times New Roman", Times, serif;
}
.body .form h4 {
  font-weight: bold;
  margin-top: 5rem;
}
.body .form .login-header-information {
  color: #fd7b38 !important;
}
.body .form .form-content {
  background-color: #fff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 5px;
  padding: 5rem;
  width: 35rem;
  margin: auto;
}
.body .form .form-content h5 {
  color: #fd7b38;
  font-weight: bold;
  margin-bottom:5%;
}
.info{
  background-color: #fff !important;
}
</style>
