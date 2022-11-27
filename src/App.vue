<template>
  <div class="container">
    <h1>Repo List</h1>
    <Search />
  </div>
</template>

<script setup>
import { useRepoStore } from "@/stores/RepoStore";
import Search from "./components/Search.vue";

const repoStore = useRepoStore();
</script>
