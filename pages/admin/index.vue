<template>
  <div>
    <v-btn color="deep-purple accent-4" dark  to="/admin/post/add">Add Post</v-btn>
    <v-row>
      <v-col class="col-lg-6 col-md-6 col-sm-12" lg6 xs12 sm8 md6 v-for="post in $store.state.posts" :key="post.id">
        <post-card :post="post" :is-admin="true"></post-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ts-ignore
import PostCard from "../../components/post-card.vue";

export default {
    middleware: 'authenticated',
  components: {
    PostCard
  },
  head: {
    title: "Home"
  },
  fetch({ $axios, store }) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts", res);
    });
  }
};
</script>
