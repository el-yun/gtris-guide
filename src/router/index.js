import Vue from "vue";
import VueRouter from "vue-router";
import Component from "../views/Component.vue";

Vue.use(VueRouter);

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

let templatedPage = [];
['tooltip','button','input','toast','pagination','collapse', 'modal'].forEach(element => {
  templatedPage.push(
    {
      path: element ,
      name: capitalize(element),
      component: () => import("../components/GtrisDoc.vue"),
      meta: {
        title: "Gtris v3 Component-"+capitalize(element)
      }
    }
  )
});

let routes = [
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
        component: () => import("../views/Guide.vue")
      },
    ]
  },
  {
    path: "/:version/component",
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
      }
    ]
  }
];

routes[1].children = routes[1].children.concat(templatedPage)


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
