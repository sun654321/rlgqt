import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';
import '@/assets/index.css';

Vue.use(Grid).use(GridItem);

// 全局注册
Vue.use(Dialog);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);

import { Search } from 'vant';
Vue.use(Search);

import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem);

import { List } from 'vant';
Vue.use(List);

import { Panel } from 'vant';
Vue.use(Panel);

import { Toast } from 'vant';
Vue.use(Toast);

import { Area } from 'vant';

Vue.use(Area);
import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar).use(IndexAnchor);

import { TreeSelect } from 'vant';
Vue.use(TreeSelect);

import { Sticky } from 'vant';
Vue.use(Sticky);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

import { AddressList } from 'vant';
import { CountDown } from 'vant';

Vue.use(CountDown);
Vue.use(AddressList);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
