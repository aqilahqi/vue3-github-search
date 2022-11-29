<template>
  <div class="container">
    <h1>Repo List</h1>
    <Search />
    <div class="list-wrapper" v-if="list.length > 0">
      <Result v-for="l in list" :key="l.id" :item="l" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRepoStore } from "@/stores/RepoStore";
import Search from "./components/Search.vue";
import Result from "@/components/SingleResult.vue";

const repoStore = useRepoStore();
const list = computed(() => {
  return repoStore.list;
});
</script>

<style lang="scss"></style>
