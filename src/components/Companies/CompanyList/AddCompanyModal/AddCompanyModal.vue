<template>
  <div class="add-company-modal">
    <q-dialog
      :model-value="showDialog"
      @update:model-value="(val) => emit('update:showDialog', val)"
    >
      <q-card style="min-width: 350px">
        <q-card-section>
          <div v-if="modalState === 'search'">
            <div class="text-h6">Company Name Search</div>
            <div class="flex full-width justify-between q-mb-lg">
              <q-input v-model="searchQuery" label="Type company name" />
              <q-btn flat label="Search" @click="handleSearch" class="q-mt-md" />
            </div>
          </div>

          <div v-if="modalState === 'suggestions'">
            <div class="text-h6">AI Suggestions</div>
            <div v-for="(name, index) in suggestions" :key="index" class="q-my-sm">
              <q-btn :label="name" @click="selectSuggestion(name)" flat />
            </div>
            <q-spinner v-if="!suggestions.length" color="primary" size="3em" :thickness="2" />
            <div v-else>
              <q-btn label="Retry" @click="retrySearch" flat class="q-mt-sm" />
              <q-btn
                label="Use original"
                @click="selectSuggestion(searchQuery)"
                flat
                class="q-mt-sm"
              />
            </div>
          </div>

          <q-separator />
          <div v-if="modalState === 'form'" class="q-pa-md">
            <q-input v-model="companyLocalState.company_name" label="Company Name" />
            <q-input v-model="companyLocalState.company_legal_name" label="Company Legal Name" />
            <q-input v-model="companyLocalState.country" label="country" />
            <div class="flex justify-between full-width align-center">
              <div>Is Active</div>
              <div>
                <q-radio v-model="companyLocalState.active" :val="true" label="true" />
                <q-radio v-model="companyLocalState.active" :val="false" label="false" />
              </div>
            </div>
            <q-separator></q-separator>
            <div class="flex justify-between full-width align-center">
              <div>Dpf found</div>
              <div>
                <q-radio v-model="companyLocalState.dpf_found" :val="true" label="true" />
                <q-radio v-model="companyLocalState.dpf_found" :val="false" label="false" />
              </div>
            </div>
            <q-separator></q-separator>
            <div class="flex justify-between full-width align-center">
              <div>Provides AI services</div>
              <div>
                <q-radio
                  v-model="companyLocalState.provides_ai_services"
                  :val="true"
                  label="true"
                />
                <q-radio
                  v-model="companyLocalState.provides_ai_services"
                  :val="false"
                  label="false"
                />
              </div>
            </div>
          </div>

          <q-card-actions>
            <div class="flex justify-between full-width">
              <q-btn flat label="Cancel" @click="cancel" />
              <q-btn
                style="background: black; color: white"
                flat
                :disable="!companyLocalState.company_name"
                label="Save"
                @click="addNewCompany"
              />
            </div>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { createCompany } from 'src/services/api/companies.service.js'
import { useCompaniesStore } from 'src/store/companiesStore.js'
const store = useCompaniesStore()
const emit = defineEmits(['update:showDialog'])
const modalState = ref('search') // 'search' | 'suggestions' | 'form'
const searchQuery = ref('')
const suggestions = ref([])
const form = ref({
  name: '',
})
const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true,
  },
})
const handleSearch = () => {
  // Simulate "AI" suggestion
  suggestions.value = []
  modalState.value = 'suggestions'
  setTimeout(() => {
    suggestions.value = [
      `${searchQuery.value} Corp.`,
      `${searchQuery.value} Holdings`,
      `${searchQuery.value} Solutions`,
    ]
  }, 1500)
}

const selectSuggestion = (name) => {
  form.value.name = name
  companyLocalState.company_name = name
  modalState.value = 'form'
}
const retrySearch = () => {
  modalState.value = 'search'
}
const companyLocalState = reactive({
  active: true,
  company_legal_name: '',
  company_name: '',
  country: '',
  dpf_found: false,
  provides_ai_services: false,
})

const resetCompanyLocalState = () => {
  companyLocalState.company_name = ''
  companyLocalState.active = false
  companyLocalState.country = ''
  companyLocalState.company_legal_name = ''
  companyLocalState.dpf_found = false
  companyLocalState.provides_ai_services = true
}
const resetForm = () => {
  form.value.name = ''
}
const addNewCompany = () => {
  const createdCompany = createCompany(companyLocalState)
  store.addCompany(createdCompany)
  handleShowModal()
}
const handleShowModal = () => {
  modalState.value = 'search'
  resetForm()
  resetCompanyLocalState()
  emit('update:showDialog', false)
}
const cancel = () => {
  handleShowModal()
}
watch(
  () => props.showDialog,
  (val) => {
    if (val) {
      modalState.value = 'search'
      resetForm()
      resetCompanyLocalState()
      searchQuery.value = ''
      suggestions.value = []
    }
  },
)
</script>
