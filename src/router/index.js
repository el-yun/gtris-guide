import Vue from "vue";
import VueRouter from "vue-router";
import Component from "../views/Component.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Component,
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
    component: Component,
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
      //! 마크다운 적용 start
      {
        path: "tooltip",
        name: "Tooltip",
        component: () => import("../components/GtrisDoc.vue"),
        meta: {
          title: "Gtris v3 Component-Tooltip"
        }
      },
      {
        path: "button",
        name: "Button",
        component: () => import("../components/GtrisDoc.vue"),
        meta: {
          title: "Gtris v3 Form-button"
        }
      },
      //! 마크다운 적용 end
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
