<template>
  <v-card
    :title="item.full_name"
    :subtitle="item.language"
    :text="item.description"
    link
    :href="item.html_url"
    target="_blank"
    hover
    variant="tonal"
    class="customCard mb-4"
  >
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="white" :image="item.owner.avatar_url"></v-avatar>
        </template>

        <v-list-item-title>{{ item.owner.login }}</v-list-item-title>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="mr-1" :icon="mdiStar"></v-icon>
            <span class="subheading mr-2">{{ item.stargazers_count }}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1" :icon="mdiEye"></v-icon>
            <span class="subheading">{{ item.watchers_count }}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { mdiStar, mdiEye } from "@mdi/js";
const props = defineProps(["item"]);
</script>

<style lang="scss" scoped></style>
