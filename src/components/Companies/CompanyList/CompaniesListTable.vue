<template>
  <div class="q-pa-md">
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      :filter="tableFilter"
      row-key="name"
      :pagination="pagination"
    >
      <template v-slot:top>
        <div class="flex justify-between items-center full-width">
          <q-input dense debounce="300" v-model="tableFilter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search " />
            </template>
          </q-input>
          <q-btn
            @click="$emit('showDialog')"
            push
            style="background: black; color: white"
            class="q-ml-md"
            >Add Company</q-btn
          >
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @click="handleCopanyClick(props.row)" class="cursor-pointer">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name === 'added'">
              {{log(col)}}
              {{ formatDateVerbal(col.value) }}
            </template>
            <template v-else>
              {{ col.value }}
            </template>
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
import {  formatDateVerbal } from 'src/services/util.service.js'

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
const tableFilter = ref('')
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
const log=(val)=>{
  console.log('val', val)
}
</script>
