import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from '../layout/default-layout.vue';
import AuthContainer from '../views/auth/authContainer.vue';
import Dashboard from '../views/dashboard/dashboard.vue';
import Stock from '../views/stock/stockList.vue'
import DispatchStock from '../views/stock/pushStock.vue'


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    redirect: "/dashboard",
    children: [
      {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock
      },
  {
    path: "/dispatch",
    name: "DispatchStock",
    component: DispatchStock
      }, {
    path: '/driver',
    name: 'Driver',
    component: () => import('../views/driver/driver'),
  },
  {
    path: '/outstock',
    name: 'OutStock',
    component: () => import('../views/stock/Outstock'),
  }
    ]
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthContainer
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
