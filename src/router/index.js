import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import("../views/HomePage.vue");
const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");
const AdminDashboard = () => import("../views/admin/AdminDashboard.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admindashboard',
      name: 'admindashboard',
      component: AdminDashboard
    },
   
  ]
})

export default router
