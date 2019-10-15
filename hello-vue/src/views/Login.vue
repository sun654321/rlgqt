<template>
  <div class="home">

    <van-nav-bar
      title="用户登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="dd">
    </div>
    <img src="../../src/static/images/1.gif" alt>

    <div id="dd1">
    </div>
    <van-cell-group>
      <van-field
        left-icon="user-o"
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
      />

      <van-field
        left-icon="goods-collect-o"
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      ></van-field>
    </van-cell-group>

       <p class="wjmm" @click="wjmm">忘记密码?</p>

    <van-button icon="good-job-o"  round type="info" size="normal" @click="tz">登录</van-button>
    <van-button icon="good-job-o"  round type="info" size="normal" @click="zc">注册</van-button>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 30px' }">
      使用以下方式进行登录
    </van-divider>

    <div id="qq">
      <img id="qq1" src="../../src/static/images/qq.jpg" alt>
      <p id="qq2">QQ</p>
    </div>
    <div id="wx">
      <img id="wx1" src="../../src/static/images/wx.jpg" alt>
      <p id="wx2">微信</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import  store from  '@/store';

  export default {
    name: 'login',
    store,
    data() {
      return {
        username:this.$route.query.zcda,
        password: '',
        datauser:''
      };
    },
    methods: {
      tz() {
        //保存当前对象
        var this_ =this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        //执行请求获取后端数据
        axios.post('/portal/user/login.do', params)
          .then(function (datas) {
            //获取状态码
            var status=datas.data.status
            if(status!==0){
              //弹出数据
              this_.$dialog.alert({
                message:datas.data.msg
              });
            }else{
              //获取后端数据
              this_.datauser=datas.data.data
              //清空数据
                this_.username='',
                this_.password='',
              //成功后跳转到首页
              this_.$router.push({path:'/'})
            //

          }
          });
      },
      zc(){
        this.$router.push({path:'/zhuce'})
      },
      onClickLeft() {
        this.$router.go(-1);//返回到上一层
      },
      onClickRight() {
        this.$router.push({path:'/zhuce'})
      },
      wjmm(){
        this.$router.push({path:'/forgetpassword'})

      }
    }
  };
</script>
<style>
  #dd{
    height: 20px;
  }
  #dd1{
    height: 20px;
  }
  #qq{
    width: 50%;
    float: left;
  }
  #wx{
    float: right;
    width: 50%;
  }
  #qq1{
    height: 20%;
    width: 20%;
    margin-left:100px
  }
  #wx1{
    height: 20%;
    width: 20%;
    margin-right:100px
  }
  #qq2{
    margin-left:100px
  }
  #wx2{
    margin-right:100px
  }
  .home{
    text-align:center;
  }
  .wjmm{
    text-align:right;
    margin: 25px;
  }
</style>
