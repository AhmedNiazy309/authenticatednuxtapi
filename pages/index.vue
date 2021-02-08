<template>
    <div class="login">
    <div class="form">
      <label for="email">Enter Your Email</label>
        <input class="form-control" v-model="form.user" id="email" type="email"/>
      <label for="password"> Enter Your password</label>
        <input
          v-model="form.password"
          id="password"
          type="password"
           class="form-control"
        />
      <button class="btn" @click="postLogin">
        login
      </button>
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
  div.login{
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
      padding: 5% 0;
}
  .form{
  text-align: center;
   width: calc(100% - 20px);
  max-width: 500px;
  background-color: #fff;
  padding: 50px 40px;
  }
  label{
  display: block ;
  }
  input{
  margin: 5% 0 ;
  }
  .btn{
  background-color: #0f0;
  }
</style>
