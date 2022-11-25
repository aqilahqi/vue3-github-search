<template>
  <div class="container">
    <h1>Repo List</h1>
    <Search />
  </div>
</template>

<script>
import { useRepoStore } from "@/stores/RepoStore";
import Search from "./components/Search.vue";
export default {
  components: { Search },
  setup() {
    const repoStore = useRepoStore();

    return { repoStore };
  },
};
</script>
