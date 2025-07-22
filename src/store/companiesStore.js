import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { companiesService } from 'src/services/api/companies.service'

export const useCompaniesStore = defineStore('companies', () => {
  const companies = ref([])

  const fetchCompanies = async () => {
    try {
      companies.value = await companiesService.getCompanies()
    } catch (err) {
      console.error('Failed to fetch companies:', err)
    }
  }

  const addCompany = (newCompany) => {
    companies.value.push(newCompany)
  }
  const getCompanies = computed(() => companies.value)
  return {
    companies,
    fetchCompanies,
    addCompany,
    getCompanies,
  }
})
