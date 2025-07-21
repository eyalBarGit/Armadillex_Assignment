<template>
  <q-card>
    <q-card-section>
      <h1>Companies</h1>
    </q-card-section>
    <q-card-section>
      <CompaniesList :companies="companies" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useCompanies } from 'src/composables/useCompanies'
import CompaniesList from 'src/components/Companies/CompanyList/CompanyList.vue'
const { companies } = useCompanies()
</script>
