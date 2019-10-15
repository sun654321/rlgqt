<template>
  <div class="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

    <van-tabbar v-model="active" class="vbbg">
    <van-tabbar-item icon="home-o"to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="mycenter">个人中心</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>


  export default {
    name: 'app',
    data() {
      return {
        active:''
      };
    },
    methods: {

    },
  };
</script>

<style >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
