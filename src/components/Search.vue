<template>
  <div>
    <v-form @submit.prevent="onSubmit" class="d-flex align-center">
      <v-text-field
        clearable
        hide-details
        variant="underlined"
        label="Search"
        v-model="store.searchWord"
        @click:clear="onClear"
      ></v-text-field>
      <v-btn
        size="large"
        color="primary"
        variant="plain"
        :icon="mdiMagnify"
        :disabled="disable"
        :loading="loading"
        type="submit"
      ></v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRepoStore } from "@/stores/RepoStore";
import { mdiMagnify } from "@mdi/js";

const store = useRepoStore();
const loading = ref(false);

const disable = computed(() => {
  if (store.searchWord.length === 0) return true;
  return false;
});

const onSubmit = () => {
  if (store.searchWord.length === 0) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

const onClear = () => {
  store.searchWord = "";
};
</script>
