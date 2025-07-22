<template>
  <q-card>
    <q-card-section>
      <h1>Companies</h1>
    </q-card-section>
    <div>
      <q-card-section class="relative">
        <CompanyListTable
          :companies="store.getCompanies"
          @showDialog="handleShoDialog"
          v-if="store.getCompanies?.length"
        />
      </q-card-section>
    </div>
  </q-card>
  <AddCompanyModal v-model:showDialog="showDialog" />

</template>

<script setup>
import CompanyListTable from 'src/components/Companies/CompanyList/CompaniesListTable.vue'
import { onMounted, ref } from 'vue'
import { useCompaniesStore } from '../../store/companiesStore.js'
import AddCompanyModal from 'components/Companies/CompanyList/AddCompanyModal/AddCompanyModal.vue'
const store = useCompaniesStore()
const showDialog = ref(false)

onMounted(() => {
  if (!store.getCompanies.length) {
    store.fetchCompanies()
  }
})

const handleShoDialog = () => {
  showDialog.value = !showDialog.value
}
</script>
