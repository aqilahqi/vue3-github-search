<template>
  <v-layout>
    <div class="container">
      <Header />
      <Search />
      <div class="list-wrapper" v-if="list.length > 0">
        <Result v-for="l in list" :key="l.id" :item="l" />
      </div>
    </div>
  </v-layout>
</template>

<script setup>
import { computed } from "vue";
import { useRepoStore } from "@/stores/RepoStore";
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Result from "@/components/SingleResult.vue";

const repoStore = useRepoStore();
const list = computed(() => {
  return repoStore.list;
});
</script>

<style lang="scss"></style>
