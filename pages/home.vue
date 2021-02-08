<template>
  <div>
    <div v-if="myauth">
  <v-row>
    <v-col
    class="col-lg-6 col-md-6 col-sm-12"
      lg6
      xs12
      sm8
      md6
      v-for="post in $store.state.posts"
      :key="post.id"
    >
      <post-card :post="post"></post-card>
    </v-col>
          <button @click="logout">
        Logout
      </button>

  </v-row>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/">
        login
      </NuxtLink>.
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import PostCard from "../components/post-card.vue"

export default {
    middleware: 'authenticated',
    components: {
    PostCard
  },
  fetch({ $axios, store }) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts", res);
    });
  },

  methods: {
    logout () {
      console.log(123);
      localStorage.removeItem("auth")
      //this.$store.commit('setAuth', null)
      this.$router.push("/");
    }
  },
  data:()=>({
    myauth : localStorage.getItem("auth")
  })
}
</script>
