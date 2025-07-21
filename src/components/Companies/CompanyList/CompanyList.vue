<template>
  <div class="company-list">
    <CompanyListTitles />
    <q-list>
      <CompanyListItem
        :company="company"
        v-for="company in pagedCompanies"
        :key="company?.id"
        class="cursor-pointer"
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
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  companies: {
    type: Array,
    required: true,
  },
})

const page = ref(1)
const perPage = 10
const maxPages = computed(() => Math.ceil(props.companies.length / perPage))

const pagedCompanies = computed(() => {
  const start = (page.value - 1) * perPage
  return props.companies.slice(start, start + perPage)
})
</script>

<style scoped>
.company-list {
  padding: 16px;
}
</style>
