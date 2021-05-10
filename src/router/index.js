import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = () => import("components/common/WebLogin");
const Home = () => import("views/Home");
const Article = () => import("views/Article");
const Detail = () => import("views/Detail");
const Message = () => import("views/Message");
const About = () => import("views/About");

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "首页", name: "home" },
  },
  {
    path: "/login",
    component: Login,
    meta: { title: "登录", name: "login" },
  },
  {
    path: "/article",
    component: Article,
    meta: { title: "文章", name: "article" },
  },
  {
    path: "/article/:id",
    component: Detail,
    meta: { name: "article" },
  },
  {
    path: "/message",
    component: Message,
    meta: { title: "留言", name: "message" },
  },
  {
    path: "/about",
    component: About,
    meta: { title: "关于", name: "about" },
  },
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
