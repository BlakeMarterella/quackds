import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import LoginLayout from "@/layout/LoginLayout";

import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";


const routes = [
  // Once teh user is authenticated, bring them to the dashboard home
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: {
          default: Dashboard
        },
      },
      {
        path: "/profile",
        name: "profile",
        components: {
          default: Profile
        },
      },
    ],
  },
  // If the user is not authenticated send them to this route
  {
    path: "/",
    redirect: "login",
    components: LoginLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: {
          default: Login
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
