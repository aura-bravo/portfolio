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
    path: "/project",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Project,
  }
];

const router = new VueRouter({
  routes
});

export default router;
