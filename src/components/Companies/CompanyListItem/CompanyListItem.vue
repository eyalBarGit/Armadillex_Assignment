<template>
  <div class="company-list-item">
    <h5>{{ props.company?.name }}</h5>
    <p>isActive: {{ props.company?.active }}</p>
    <p>Country: {{ props.company?.country }}</p>
    <p>Date Added: {{ props.company?.dateAdded }}</p>
    <!-- Company item content goes here -->
  </div>
</template>

<script setup>
const props = defineProps({
  company: {
    type: Object,
    required: true,
  },
})
import { defineProps } from 'vue'
</script>
const props = defineProps({ company: { type: Object, required: true, }, })

<style scoped>
.company-list-item {
  /* Add styles for your company list item */
}
</style>
