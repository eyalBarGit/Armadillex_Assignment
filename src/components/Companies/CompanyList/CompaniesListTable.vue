<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      no-results-label="The filter didn't uncover any results"
      row-key="name"
      :pagination="pagination"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> no companies... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
const props = defineProps({
  companies: {
    type: Array,
    required: true,
  },
})
const rows = ref([])
onMounted(() => {
  rows.value = props.companies
})
const filter = ref('')
const pagination = ref({
  page: 1,
  rowsPerPage: 10, // שים כמה שאתה רוצה
})
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'isActive',
    required: true,
    label: 'Is Active',
    align: 'left',
    field: (row) => row.active,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: 'country',
    required: true,
    label: 'Country',
    align: 'left',
    field: (row) => row.country,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'added',
    required: true,
    label: 'Date Added',
    align: 'left',
    field: (row) => row.dateAdded,
    format: (val) => `${val}`,
    sortable: true,
  },
]
</script>
