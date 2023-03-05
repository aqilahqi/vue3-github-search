<template>
  <v-card
    :subtitle="item.language"
    target="_blank"
    color="dark"
    class="customCard mb-4"
  >
    <template v-slot:title>
      <div class="d-flex justify-space-between card-title">
        <h5
          class="custom-text-title flex-grow-1 mr-4 font-weight-medium text-secondary"
        >
          {{ item.full_name }}
        </h5>
        <v-btn
          :icon="item.saved ? mdiBookmark : mdiBookmarkOutline"
          variant="flat"
          color="white"
          class="text-dark custom-btn-icon"
          size="34"
          @click="saveRepo"
        >
        </v-btn>
      </div>
    </template>
    <template v-slot:text>
      <p class="font-weight-light">{{ item.description }}</p>
      <div class="ratings-wrapper mt-3 d-flex align-center">
        <div class="star d-flex mr-3">
          <v-avatar :size="18">
            <v-img :src="star" alt="stars"></v-img>
          </v-avatar>
          <span class="text-light ml-1">{{ item.stargazers_count }}</span>
        </div>
        <div class="watch d-flex mr-3">
          <v-avatar :size="18">
            <v-img :src="eye" alt="eye"></v-img>
          </v-avatar>
          <span class="text-light ml-1">{{ item.watchers_count }}</span>
        </div>
        <div class="fork d-flex mr-3">
          <v-avatar :size="18">
            <v-img :src="fork" alt="fork"></v-img>
          </v-avatar>
          <span class="text-light ml-1">{{ item.forks_count }}</span>
        </div>
        <div v-if="item.homepage">
          <v-btn
            :href="item.homepage"
            target="_blank"
            variant="plain"
            color="primary"
            class="pa-0 text-decoration-underline text-capitalize"
            >Website</v-btn
          >
        </div>
      </div>
      <p class="text-blue-grey-lighten-1 font-weight-regular mt-3 mb-1">
        Topics
      </p>
      <Topics :topics="item.topics" class="" v-if="item.topics.length > 0" />
      <span v-else>—</span>
      <hr class="mt-5" />
    </template>

    <v-card-actions class="pb-4 pt-0">
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="white" :image="item.owner.avatar_url"></v-avatar>
        </template>

        <v-list-item-title>{{ item.owner.login }}</v-list-item-title>

        <template v-slot:append>
          <v-btn
            :href="item.html_url"
            target="_blank"
            variant="tonal"
            color="light"
            class="custom-btn"
            >View <span class="d-none d-sm-flex ml-1">repository</span></v-btn
          >
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useRepoStore } from "@/stores/RepoStore";
import Topics from "@/components/Topics.vue";
import star from "@/assets/images/stars.png";
import eye from "@/assets/images/eye-outline.png";
import fork from "@/assets/images/source-fork.png";
import { mdiBookmark, mdiBookmarkOutline } from "@mdi/js";
const props = defineProps(["item"]);
const repoStore = useRepoStore();

const saveRepo = () => {
  repoStore.saveRepo(props.item);
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
hr {
  border-color: rgba($secondary, 0.13);
}
.custom-btn {
  text-transform: unset !important;
  font-weight: 400;
  padding: 10px 26px !important;
  height: auto !important;
}
.custom-btn-icon {
  font-size: 15px !important;
  background-color: $dark;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4) !important;
    color: #fff !important;
  }
}

.card-title {
  .custom-text-title {
    white-space: normal !important;
  }
}
</style>
