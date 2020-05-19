import Vue from "vue";
import VueRouter from "vue-router";
// import Guide from "../views//Guide.vue";
// import Component from "../views/Component.vue";
import ComponentNew from "../views/ComponentNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ComponentNew,
    mata: {
      title: "Gtris v3"
    },
    children: [
      {
        path: "",
        component: () => import("../components/Page.vue")
      },
    ]
  },
  {
    path: "/component",
    name: "component",
    component: ComponentNew,
    mata: {
      title: "Gtris v3 Component"
    },
    children: [
      {
        path: "",
        component: () => import("../components/Page.vue"),
        meta: {
          title: "Gtris v3 Component-button"
        }
      },
      {
        path: "button",
        name: "Button",
        component: () => import("../components/Button.vue"),
        meta: {
          title: "Gtris v3 Form-button"
        }
      },
      {
        path: "markdown",
        name: "markDown",
        component: () => import("../components/markDown.vue"),
        meta: {
          title: "Gtris v3 markDown"
        }
      },      
      {
        path: "loadTest",
        name: "loadTest",
        component: () => import("../components/markDown.vue"),
        meta: {
          title: "Gtris v3 markDown"
        }
      },  

      {
        path: "collapse",
        name: "Collapse",
        component: () => import("../components/Collapse.vue"),
        meta: {
          title: "Gtris v3 Component-Collapse"
        }
      },
      {
        path: "pagination",
        name: "Pagination",
        component: () => import("../components/Pagination.vue"),
        meta: {
          title: "Gtris v3 Component-Pagination"
        }
      },
      {
        path: "infinitescroll",
        name: "InfiniteScroll",
        component: () => import("../components/InfiniteScroll.vue"),
        meta: {
          title: "Gtris v3 Component-Pagination"
        }
      },
      {
        path: "infinitescrollpreview",
        name: "InfiniteScrollPreview",
        component: () => import("../components/InfiniteScrollPreview.vue"),
        meta: {
          title: "Gtris v3 Component-Pagination-Scroll"
        }
      },
      {
        path: "tooltip",
        name: "Tooltip",
        component: () => import("../components/Tooltip.vue"),
        meta: {
          title: "Gtris v3 Component-Tooltip"
        }
      },
      {
        path: "toast",
        name: "Toast",
        component: () => import("../components/Toast.vue"),
        meta: {
          title: "Gtris v3 Component-Toast"
        }
      },
      {
        path: "input",
        name: "Input/Textarea",
        component: () => import("../components/Input.vue"),
        meta: {
          title: "Gtris v3 Form-Input"
        }
      },
      {
        path: "modal",
        name: "Modal",
        component: () => import("../components/Modal.vue"),
        meta: {
          title: "Gtris v3 Form-Modal"
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
