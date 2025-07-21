<template>
  <div class="row">
    <div class="col">name</div>
    <div class="col">isActive</div>
    <div class="col">Country</div>
    <div class="col">Added</div>
  </div>
</template>

<script setup>
// No script logic needed for static titles
</script>

<style scoped>
.company-list-titles {
  display: flex;
  gap: 2rem;
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}
.title {
  flex: 1;
}
</style>
