<template>
  <div>

    <van-nav-bar
      title="个人中心"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">


    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
      <van-cell icon="points" title="我的信息详情" is-link  @click="getUserdetails"/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
    </van-cell-group>
    <van-button type="primary" size="large"  color="#FF0C11" @click="tcdl">退出登录</van-button>
  </div>
</template>

<script>

  import axios from 'axios';


  export default {
    name: 'MyCenter',
    data() {
      return {};
    },
    methods: {
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
            if (status !== 0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
              this.$router.push({ path: '/MyCenter' })
            } else {
              //获取后端数据
              this_.goods = datas.data.data;
              this_.$router.push({
                path: '/Userdetails',
                query: { da: this_.datauser }
              })
            }
          });
      },
      tcdl() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();

        //执行请求获取后端数据
        axios.post('/portal/user/logout.do')
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status
            if (status !== 0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
            } else {
              this_.$router.push({ path: '/' })
            }
          });
      },
      onClickLeft() {
        this.$router.go(-1);//返回到上一层
      },
      onClickRight() {
        this.$router.push({ path: '/login' })
      }

    }
  };
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }
    &-group {
      margin-bottom: 15px;
    }
    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
