<template>
  <div class="company-details">
    <h2>Company Details</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const companyId = route.params.companyId

console.log('companyId:', companyId)
</script>

<style scoped>
.company-details {
  padding: 1rem;
}
</style>
