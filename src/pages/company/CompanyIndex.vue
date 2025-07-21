<template>
  <q-card>
    <q-card-section>
      <h1>Companies</h1>
    </q-card-section>
    <div>
      <q-card-section class="relative">
        <CompanyListTable :companies="companies" v-if="companies" />
      </q-card-section>
    </div>
  </q-card>
</template>

<script setup>
import { useCompanies } from 'src/composables/useCompanies'
import CompanyListTable from 'src/components/Companies/CompanyList/CompaniesListTable.vue'
// import CompaniesList from 'src/components/Companies/CompanyList/CompanyList.vue'
const { companies } = useCompanies()
</script>
