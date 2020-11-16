import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'home' }
    ]
  },
  {
    path: '/system',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/configuration', component: () => import('pages/system/ConfigurationPage.vue'), name: 'configuration' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
