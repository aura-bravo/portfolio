import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Project from "../views/Project.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:name",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Project,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
