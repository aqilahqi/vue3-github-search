<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex align-center left">
      <v-icon size="35px" color="dark"> {{ mdiGithub }} </v-icon>
      <h1 class="m-0 text-h6 font-weight-semibold">Github Repo Search</h1>
    </div>
    <router-link to="/saved-repositories">
      <v-btn class="ma-2 action-button" size="35px" :icon="mdiBookmark"></v-btn>
    </router-link>
  </div>
</template>

<script setup>
import { mdiGithub, mdiBookmark } from "@mdi/js";
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

h1 {
  margin-left: 8px;
  color: $dark;
}
.action-button {
  color: #fff;
  background-color: $dark !important;
  font-size: 14px !important;
}
</style>
