import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/Home");
const Article = () => import("views/Article");
const Detail = () => import("views/Detail")

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "首页" },
  },
  {
    path: "/article",
    component: Article,
    meta: { title: "文章" },
  },
  {
    path: "/article/:id",
    component: Detail,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
