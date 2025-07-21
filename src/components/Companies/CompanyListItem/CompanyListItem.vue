<template>
  <q-item>
    <div
      class="company-list-item border-bottom full-width row items-center text-body1 q-py-md"
      @click="handleClick(company)"
    >
      <div class="col">
        <div>{{ company.name }}</div>
      </div>
      <div class="col">
        <q-badge :color="company.active ? 'green' : 'red'">
          {{ company.active ? 'Active' : 'Inactive' }}
        </q-badge>
      </div>
      <div class="col">
        <div>{{ props.company?.country }}</div>
      </div>
      <div class="col">
        <div>{{ formatDateVerbal(props?.company?.dateAdded) }}</div>
      </div>
      <!-- Company item content goes here -->
    </div>
  </q-item>
</template>

<script setup>
const props = defineProps({
  company: {
    type: Object,
    required: true,
  },
})

const { company } = props
import { defineProps, toRaw } from 'vue'
import { formatDateVerbal } from 'src/services/util.service'

const handleClick = (company) => {
  // Handle click event for the company item
  console.log('Company clicked:', toRaw(company))
}
</script>

<style scoped>
.company-list-item:hover {
  background-color: rgb(231, 231, 231);
  /* Add styles for your company list item */
}
</style>
