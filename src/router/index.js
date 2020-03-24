import Vue from "vue";
import VueRouter from "vue-router";
import Guide from "../views/Guide.vue";
import Component from "../views/Component.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Guide",
    component: Guide,
    mata: {
      title: "Gtris v3"
    }
  },
  {
    path: "/component",
    name: "component",
    component: Component,
    mata: {
      title: "Gtris v3 Component"
    },
    children: [
      {
        path: "",
        component: () => import("../components/Button.vue"),
        meta: {
          title: "Gtris v3 Component-button"
        }
      },
      {
        path: "button",
        component: () => import("../components/Button.vue"),
        meta: {
          title: "Gtris v3 Component-button"
        }
      },
      {
        path: "collapse",
        component: () => import("../components/Collapse.vue"),
        meta: {
          title: "Gtris v3 Component-Collapse"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
