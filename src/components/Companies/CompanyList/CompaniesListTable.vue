<template>
  <div class="q-pa-md">
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      :filter="filter"
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

      <template v-slot:body="props">
        <q-tr :props="props" @click="handleCopanyClick(props.row)" class="cursor-pointer">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
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
import { columns } from './companies.table.service'
import { useRouter } from 'vue-router'
import { ROUTES } from 'src/router/const.js'

const router = useRouter()
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
  rowsPerPage: 10,
})

const handleCopanyClick = (company) => {
  router.push({
    name: ROUTES.COMPANY,
    params: { companyId: company.id },
  })
}
</script>
