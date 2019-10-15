import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Zhuce from './views/Zhuce.vue';
import Productdetail from './views/Productdetail.vue';
import Cart from './views/Cart.vue';
import AddressEdit from './views/AddressEdit.vue';
import MyCenter from './views/MyCenter.vue';
import AddressList from './views/AddressList.vue';
import ForgetPassword from './views/ForgetPassword.vue';
import Submitanswers from './views/Submitanswers.vue';
import Resetpassword from './views/Resetpassword.vue';
import Userdetails from './views/Userdetails.vue';
import Category from './views/Category.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/addressEdit',
      name: 'addressEdit',
      component: AddressEdit,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      component: Productdetail,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/submitanswers',
      name: 'submitanswers',
      component: Submitanswers,
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: Resetpassword,
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: Zhuce,
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: MyCenter,
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: AddressList,
    },
    {
      path: '/userdetails',
      name: 'userdetails',
      component: Userdetails,
    },
    // {
    //     //   path: '/about',
    //     //   name: 'about',
    //     //   // route level code-splitting
    //     //   // this generates a separate chunk (about.[hash].js) for this route
    //     //   // which is lazy-loaded when the route is visited.
    //     //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //     // },
  ],
});
