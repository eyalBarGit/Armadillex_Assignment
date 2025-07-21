<template>
  <div class="company-list">
    <CompanyListTitles @handleSortBy="handleSortBy" />
    <q-list>
      <CompanyListItem
        :company="company"
        v-for="company in companiesToDisplay"
        :key="company?.id"
        class="cursor-pointer relative"
      />
    </q-list>
    <q-separator class="q-my-md" />
    <div class="flex full-width justify-center">
      <q-pagination
        v-model="page"
        :max="maxPages"
        max-pages="5"
        boundary-numbers
        dense
        direction-links
      />
    </div>
  </div>
</template>

<script setup>
import CompanyListItem from '../CompanyListItem/CompanyListItem.vue'
import CompanyListTitles from './CompanyListTitles/CompanyListTitles.vue'
import { computed, defineProps, onMounted, ref, watch } from 'vue'

const props = defineProps({
  companies: {
    type: Array,
    required: true,
  },
})
// Reactive state for companies to display
const companiesToDisplay = ref([])
onMounted(() => {
  companiesToDisplay.value = pagedCompanies.value
})

// Pagination logic
const page = ref(1)
const companiesPerPage = 10
const maxPages = computed(() => Math.ceil(props.companies.length / companiesPerPage))

const pagedCompanies = computed(() => {
  const start = (page.value - 1) * companiesPerPage
  return props.companies.slice(start, start + companiesPerPage)
})

watch(pagedCompanies, () => {
  companiesToDisplay.value = pagedCompanies.value
})

// sorting logic
const handleSortBy = (sortBy) => {
  console.log(`Sorting by: ${sortBy.sortBy} in ${sortBy.direction} order`)
}
</script>

<style scoped>
.company-list {
  padding: 16px;
}
</style>
