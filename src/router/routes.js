
const routes = [
  {
    path: '/adwait',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/adwait/about', component: () => import('pages/AboutMe.vue') },
      { path: '/adwait/interest', component: () => import('pages/MyInterest.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
