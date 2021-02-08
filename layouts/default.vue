<template>
  <v-app dark>
    <app-header></app-header>

    <v-main>
      <v-container>
        <nuxt />
        <!-- <AppPost></AppPost> -->
      </v-container>
    </v-main>

    <!-- <app-footer></app-footer> -->
  </v-app>
</template>

<script>
import AppHeader from "@/components/core/app-header";
// import AppPost from '../components/post-card.vue';
// import AppFooter from '@/components/core/app-footer';
export default {
  components: {
    AppHeader,
    // AppPost
    // AppFooter
  },
};
</script>
