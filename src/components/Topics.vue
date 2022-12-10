<template>
  <div class="d-flex align-center flex-wrap">
    <div v-for="t in topics" :key="t" class="cutom-badge">{{ t }}</div>
  </div>
</template>

<script setup>
const props = defineProps(["topics"]);
</script>

<style lang="scss">
@import "../scss/variables.scss";
.cutom-badge {
  opacity: 1;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  background-color: rgba($secondary, 0.38);
  padding: 3px 6px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
