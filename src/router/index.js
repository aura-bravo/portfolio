import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:name",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Project
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});
router.beforeEach((to, from, next) => {
  // More code ...
  setTimeout(() => {
    next();
    window.scrollTo(0, 0);
    document.body.classList.remove('animations--started');
  }, 400);
});

export default router;
