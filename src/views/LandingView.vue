<template>
  <div class="landing">
    <h1>Landing</h1>
    <v-text-field
      clearable
      label="Search"
      :prepend-icon="mdiGithub"
      :prepend-inner-icon="mdiMagnify"
      :model-value="store.searchword"
    ></v-text-field>
    <ul>
      <li v-for="(list, index) in store.list" :key="index">{{ list }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRepoStore } from "@/stores/repo";
import { mdiMagnify, mdiGithub } from "@mdi/js";

const store = useRepoStore();
</script>
