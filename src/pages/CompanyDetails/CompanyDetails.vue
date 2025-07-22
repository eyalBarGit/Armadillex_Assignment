<template>
  <div class="flex flex-column">
  <q-card class="company-details flex align-center">
    <h2>{{ company?.name }}</h2>
    <div class="q-mt-lg q-ml-sm">
    <q-badge :color="statusBadgeColor">{{activeStatus}}</q-badge>
    </div>
  </q-card>
    <div class="flex justify-between">
  <q-card class="company-details q-mt-sm">
    <pre>{{ company }}</pre>
  </q-card>
      <q-card class="company-details q-mt-sm">
        <pre>{{ company }}</pre>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCompanies } from 'src/composables/useCompanies'
const { companies } = useCompanies()
const route = useRoute()
const companyId = route.params.companyId
console.log('Company with ID', companyId)
const company = computed(() => companies?.value?.find((company) => company.id === companyId))

const activeStatus = company.value.active ? 'Active': 'Not Active'
const statusBadgeColor = company.value.active ?'green':'red'
</script>

<style scoped>
.company-details {
  padding: 1rem;
}
</style>
