<template>

  <div class="goods">
    <top-back :content="title"></top-back>

    <van-divider :style="{ color: '#070c08', borderColor: '#070c08', padding: '10px 20px' }">
      个人信息详情如下
    </van-divider>

    <p>用户名：{{goods.username}}</p>
    <p>密码：不可显示</p>
    <p>邮箱：{{goods.email}}</p>
    <p>电话号码：{{goods.phone}}</p>
    <p>密保问题：{{goods.question}}</p>
    <p>密保答案：{{goods.answer}}</p>
    <p>创建时间：{{goods.createTime}}</p>

  </div>


</template>


<script>
  import TopBack from '@/components/TopBack.vue';
  import axios from 'axios';
   import  store from  '@/store';

  export default {
    name: 'Userdetails',
    components: { TopBack },
    store,
    data() {
      return {
        title: '个人中心',
        goods: store.state.users
      };
    },
    methods:{
      getUserdetails() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        //执行请求获取后端数据
        axios.post('/portal/user/get_user_info.do')
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status;
            if (status !==0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
              this.$router.push({path:'/MyCenter'})
            } else {
              //获取后端数据
              this_.goods = datas.data.data;
            }
          });
      },

    },
    activated: function () {
      this.getUserdetails();
    },

  };
</script>

<style scoped>
  .goods p{
background-color: rgba(180, 148, 59, 0.17);
    font-size: 20px;
    margin:20px;
  }
</style>
