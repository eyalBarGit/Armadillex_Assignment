<template>
  <div class="flex flex-column" v-if="company?.name">
    <q-card class="company-details flex align-center">
      <h2>{{ company?.name }}</h2>
      <div class="q-mt-lg q-ml-sm">
        <q-badge :color="statusBadgeColor">{{ activeStatus }}</q-badge>
      </div>
    </q-card>
    <q-separator />
    <q-card class="company-details q-mt-lg">
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <div class="col-6">
            <div class="text-subtitle2 text-grey">Legal Name</div>
            <div>{{ company.legalName }}</div>

            <div class="text-subtitle2 text-grey q-mt-md">Country</div>
            <div>{{ company.country }}</div>

            <div class="text-subtitle2 text-grey q-mt-md">Date Added</div>
            <div>{{ formatDateVerbal(company.dateAdded) }}</div>
          </div>

          <div class="col-6">
            <div class="text-subtitle2 text-grey">Parent ID</div>
            <div>{{ company.parentId || '-' }}</div>

            <div class="text-subtitle2 text-grey q-mt-md">Provides AI Services</div>
            <q-badge :color="company.providesAiServices ? 'green' : 'red'">
              {{ company.providesAiServices ? 'Yes' : 'No' }}
            </q-badge>

            <div class="text-subtitle2 text-grey q-mt-md">DPF Found</div>
            <q-badge :color="company.isDpfFound ? 'green' : 'red'">
              {{ company.isDpfFound ? 'Yes' : 'No' }}
            </q-badge>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCompanies } from 'src/composables/useCompanies'
import { formatDateVerbal } from 'src/services/util.service.js'
const { companies } = useCompanies()
const route = useRoute()
const companyId = route.params.companyId
const company = computed(() => companies?.value?.find((company) => company.id === companyId))

const activeStatus = company?.value?.active ? 'Active' : 'Not Active'
const statusBadgeColor = company?.value?.active ? 'green' : 'red'
</script>

<style scoped>
.company-details {
  padding: 1rem;
}
</style>
