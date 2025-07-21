<template>
  <q-item>
    <div class="row full-width border-bottom border-md titles">
      <div v-for="title in titles" :key="title.sortBy" class="col text-bold">
        <div @click="handleTitleClick(title)" class="col">
          {{ title.label }}
          {{ title.isSelected ? (title.direction === 'asc' ? '▼' : '▲') : '' }}
        </div>
      </div>
    </div>
  </q-item>
</template>

<script setup>
import { reactive, defineEmits, computed } from 'vue'
const emit = defineEmits(['handleSortBy'])
const selectedTitle = reactive({ sortBy: '', direction: 'asc' })

const titles = computed(() => [
  {
    label: 'Name',
    sortBy: 'name',
    isSelected: selectedTitle.sortBy === 'name',
    direction: selectedTitle.direction,
  },
  {
    label: 'Is Active',
    sortBy: 'isActive',
    isSelected: selectedTitle.sortBy === 'isActive',
    direction: selectedTitle.direction,
  },
  {
    label: 'Country',
    sortBy: 'country',
    isSelected: selectedTitle.sortBy === 'country',
    direction: selectedTitle.direction,
  },
  {
    label: 'Added',
    sortBy: 'dateAdded',
    isSelected: selectedTitle.sortBy === 'dateAdded',
    direction: selectedTitle.direction,
  },
])

const handleTitleClick = (title) => {
  if (selectedTitle.sortBy === title.sortBy) {
    selectedTitle.direction = selectedTitle.direction === 'asc' ? 'desc' : 'asc'
  } else {
    selectedTitle.sortBy = title.sortBy
    selectedTitle.direction = 'asc'
  }

  emit('handleSortBy', {
    sortBy: selectedTitle.sortBy,
    direction: selectedTitle.direction,
  })
}
</script>
<style scoped>
.titles {
  border-bottom: 2px solid #363535;
}
</style>
