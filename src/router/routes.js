import AppIndex from 'src/pages/AppIndex.vue'
import { ROUTES } from './const'

const routes = [
  {
    path: '/',
    name: ROUTES.APP,
    redirect: ROUTES.COMPANIES,
    component: AppIndex,
    children: [
      {
        path: ROUTES.COMPANIES,
        name: ROUTES.COMPANIES,
        component: () => import('src/pages/company/CompanyIndex.vue'),
      },
      {
        path: '/companies/:companyId',
        name: ROUTES.COMPANY,
        component: () => import('src/pages/CompanyDetails/CompanyDetails.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
