import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// 404可以不用异步
import NotFound from "../views/404";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      // 如果路径是user则重定向到login
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register"),
      },
    ],
  },

  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      // dashboard
      {
        // 重定向
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        // render函数渲染router-view
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/DashBoard/Analysis"
              ),
          },
        ],
      },
      // form
      {
        path: "/form",
        name: "form",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basic-form",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Form/BasicForm"),
          },
          {
            path: "/form/step-form",
            name: "step-form",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Form/StepForm"),
            children: [
              // redirect
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/Info"
                  ),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/Confirm"
                  ),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/Result"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // 404页面
    path: "*",
    name: "404",
    component: NotFound,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // routes中引入会为该路由生成一个单独的chunk，该chuck被路由时是懒加载（异步加载）
    component: () =>
      // 指定chuckName可以让webpack打包的时候都放在一个包里面
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
// 创建router的函数
const createRouter = () => {
  let router = new VueRouter({
    mode: "history",
    routes: routes,
  });

  // 路由守卫函数（路由跳转时的钩子函数） to:将要执行的路由， form：现在的路由，
  // next：需要最后调用next函数resolve这个钩子函数
  router.beforeEach((to, form, next) => {
    NProgress.start();
    next();
  });
  // 路由守卫的结束
  router.afterEach(() => {
    NProgress.done();
  });

  return router;
};

// 自动创建
const router = createRouter();

// 重置路由
export function resetRouter() {
  const newRouter = createRouter();
  // reset
  router.matcher = newRouter.matcher;
}

export default router;
