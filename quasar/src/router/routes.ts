import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PortfolioPage.vue') },
      { path: 'product', component: () => import('pages/ProductPage.vue') },
      {
        path: 'marketplace',
        component: () => import('pages/MarketplacePage.vue'),
      },
      { path: 'listing', component: () => import('pages/ListCardPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
