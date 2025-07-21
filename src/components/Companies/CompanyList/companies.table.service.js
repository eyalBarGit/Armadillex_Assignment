export const columns = [
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
