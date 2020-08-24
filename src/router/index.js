import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue"
// import About from "../views/About.vue"
Vue.use(VueRouter);

const routes = [
  {  
    path:'/',
    redirect:"/Login"
  },
  {
    //Login  登录
        path: "/Login",
        name: "Login",
        component: Login 
      },
  // home 首页
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      { //About是首页的下拉子菜单
        path:'/About',
        name: "About",
      component:() => import("../views/About.vue") },

      { //工作管理
        path:'/Work',
      name: "Work",
       component:() => import("../views/Work.vue") },
      { //求职者管理
      path:'/Jobhunter',
       name: "Jobhunter",
      component:() => import("../views/Jobhunter.vue") },
      { // 分类管理
       path:'/Classify',
        name: "Classify",
      component:() => import("../views/Classify.vue") },
       { // 用户管理
        path:'/User',
        name: "User",
     component:() => import("../views/User.vue") }
    ]
  },
  // {
  //   //about
  //   // path: "/about",
  //   // name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
 
];

const router = new VueRouter({
  routes
});

export default router;
