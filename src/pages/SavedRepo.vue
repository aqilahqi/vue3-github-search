<template>
  <div>
    <v-layout>
      <div class="container">
        <div class="d-flex align-center left">
          <router-link to="/">
            <v-btn
              class="ma-2 action-button"
              color="dark"
              size="35px"
              :icon="mdiChevronLeft"
            ></v-btn>
          </router-link>
          <h1 class="m-0 ml-2 text-h6 font-weight-semibold">
            Saved repositories
          </h1>
        </div>
        <div class="list-wrapper" v-if="list.length > 0">
          <Result v-for="l in list" :key="l.id" :item="l" />
        </div>
        <v-banner
          v-else
          lines="three"
          class="mt-2"
          text="No repository saved.."
          :stacked="false"
        >
        </v-banner>
      </div>
    </v-layout>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRepoStore } from "@/stores/RepoStore";
import { mdiChevronLeft } from "@mdi/js";
import Result from "@/components/SingleResult.vue";

const repoStore = useRepoStore();
const list = computed(() => {
  return repoStore.history;
});
</script>

<style lang="scss" scoped></style>
