<template>
  <q-item>
    <div class="row full-width border-bottom border-md titles">
      <div v-for="title in titles" :key="title.sortBy" class="col text-bold">
        <div @click="$emit('handleSortBy', title.sortBy)" class="col">
          {{ title.label }}
        </div>
      </div>
    </div>
  </q-item>
</template>

<script setup>
const titles = [
  { label: 'Name', sortBy: 'name' },
  { label: 'Is Active', sortBy: 'isActive' },
  { label: 'Country', sortBy: 'country' },
  { label: 'Added', sortBy: 'dateAdded' },
]

// No script logic needed for static titles
</script>
<style scoped>
.titles {
  border-bottom: 2px solid #363535;
}
</style>
