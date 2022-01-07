import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth from "../services/authService";

const routes = [
  {
    path: "/login",
    name: "Login",
    beforeEnter: (to, from, next) => {
      if (auth.getCurrentSession()) next({ name: "Home" });
      else next();
    },
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Verify in the route requiere auth and if a session is setted
router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some((record) => record.meta.requireAuth);

  if (protectedRoute && auth.getCurrentSession() === undefined) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
