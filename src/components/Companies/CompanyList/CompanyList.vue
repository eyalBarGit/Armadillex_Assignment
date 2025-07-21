<template>
  <div class="company-list">
    <h2>Company List</h2>
    <ul>
      <li v-for="company in props?.companies" :key="company?.id">
        <CompanyListItem :company="company" />
      </li>
    </ul>
    <p v-if="companies.length === 0">No companies available.</p>
  </div>
</template>

<script setup>
import CompanyListItem from '../CompanyListItem/CompanyListItem.vue'

const props = defineProps({
  companies: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.company-list {
  width: 100%;
  border: 2px solid blue;
}
.company-list {
  padding: 16px;
}
</style>
