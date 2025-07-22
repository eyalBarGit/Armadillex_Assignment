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
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <h2>Add Company</h2>
        <!-- Add form for adding a company here -->
      </q-card-section>

      <q-card-section>
        <q-input v-model="companyLocalState.company_name" label="Company Name" />
        <q-input v-model="companyLocalState.company_legal_name" label="Company Legal Name" />
        <q-input v-model="companyLocalState.country" label="country" />
        <div>Is Active</div>
        <div>
          <q-radio v-model="companyLocalState.active" :val="true" label="true" />
          <q-radio v-model="companyLocalState.active" :val="false" label="false" />
        </div>
        <div>dpf_found</div>
        <div>
          <q-radio v-model="companyLocalState.dpf_found" :val="true" label="true" />
          <q-radio v-model="companyLocalState.dpf_found" :val="false" label="false" />
        </div>
        <div>Provieds ai_services</div>
        <div>
          <q-radio v-model="companyLocalState.provides_ai_services" :val="true" label="true" />
          <q-radio v-model="companyLocalState.provides_ai_services" :val="false" label="false" />
        </div>
      </q-card-section>

      <q-card-actions>
        <div class="flex justify-between full-width">
          <q-btn flat label="Cancel" @click="handleShoDialog" />
          <q-btn style="background: black; color: white" flat label="Save" @click="addNewCompany" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import CompanyListTable from 'src/components/Companies/CompanyList/CompaniesListTable.vue'
import { ref, reactive, watch, onMounted } from 'vue'
import { createCompany } from 'src/services/api/companies.service.js'
import { useCompaniesStore } from '../../store/companiesStore.js'
const store = useCompaniesStore()
onMounted(() => {
  if (!store.getCompanies.length) {
    store.fetchCompanies()
  }
})

const showDialog = ref(false)
const companyLocalState = reactive({
  active: true,
  company_legal_name: '',
  company_name: '',
  country: '',
  dpf_found: false,
  provides_ai_services: true,
})

const resetForm = () => {
  companyLocalState.company_name = ''
  companyLocalState.active = false
  companyLocalState.country = ''
  companyLocalState.company_legal_name = ''
  companyLocalState.dpf_found = false
  companyLocalState.provides_ai_services = true
}
watch(showDialog, () => {
  resetForm()
})

const handleShoDialog = () => {
  showDialog.value = !showDialog.value
}

const addNewCompany = () => {
  const createdCompany = createCompany(companyLocalState)
  store.addCompany(createdCompany)
  showDialog.value = false
}
</script>
