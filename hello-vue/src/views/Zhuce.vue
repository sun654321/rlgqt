<template>
  <div class="home">
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="dd">
    </div>
    <img src="../../src/static/images/1.gif" alt>

    <van-cell-group>
      <van-field
        left-icon="user-o"
        v-model="username"
        autofocus="autofocus"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
        @blur="unblur"
      />
      <van-field
        left-icon="goods-collect-o"
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        right-icon="question-o"
        @click-right-icon="$toast('请输入密码')"
      />
      <van-field
        left-icon="goods-collect-o"
        v-model="password2"
        type="password"
        label="密码"
        placeholder="请再次输入密码"
        required
        right-icon="question-o"
        @click-right-icon="$toast('再次输入密码')"
      />
      <van-field
        left-icon="comment-o"
        v-model="email"
        label="邮箱"
        placeholder="请输入邮箱"
        required
        right-icon="question-o"
        @click-right-icon="$toast('请输入邮箱')"
      />
      <van-field
        left-icon="phone-o"
        v-model="phone"
        label="电话"
        placeholder="请输入电话"
        required
        right-icon="question-o"
        @click-right-icon="$toast('请输入电话')"
      />
      <van-field
        left-icon="question-o"
        v-model="question"
        label="密保问题"
        placeholder="请输入密保问题"
        required
        right-icon="question-o"
        @click-right-icon="$toast('请输入密保问题')"
      />
      <van-field
        left-icon="passed"
        v-model="answer"
        label="密保答案"
        placeholder="请输入密保答案"
        required
        right-icon="question-o"
        @click-right-icon="$toast('请输入密保答案')"
      />
    </van-cell-group>

    <div id="dfzc"></div>
    <van-button  icon="good-job-o" round type="info" size="large" @click="tz">点击注册</van-button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'zhuce',
    data() {
      return {
        username: '',
        password: '',
        password2: '',
        email: '',
        phone: '',
        question: '',
        answer: '',
        datauser: ''
      };
    },
    methods: {
      unblur(){
        //当用户输入用户名时，鼠标离开
        //判断用户是否存在
        //如果用户名存在对用户进行提示
        //保存当前对象
        var this_ =this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('str', this.username);
        params.append('type', 'username');
        //执行请求获取后端数据
        axios.post('/portal/user/check_valid.do', params)
          .then(function (datas) {
            //获取状态码
            var status=datas.data.status
            if(status!==0){
              //弹出数据
              this_.$dialog.alert({
                message:datas.data.msg
              });
            }else {
              //弹出成功信息
              this_.$dialog.alert({
                message: datas.data.msg
              });
            }
          });
        //判断两次的密码是否相同
      },
      tz() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        params.append('email', this.email);
        params.append('phone', this.phone);
        params.append('question', this.question);
        params.append('answer', this.answer);
        //执行请求获取后端数据
        axios.post('/portal/user/register.do', params)
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status;
            if (status !== 0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
            } else {
                //弹出数据
                this_.$dialog.alert({
                  message: datas.data.msg
                });
                //获取后端数据
                this_.datauser = datas.data.data
              //成功后跳转到登录页
               this_.$router.push({path:'/login',query:{zcda:this_.username}});
              //清空数据
                this_.username='',
                this_.password='',
                this_.password2='',
                this_.email='',
                this_.phone='',
                this_.question='',
                this_.answer=''


            }
            }
          );
      },

      onClickLeft() {
          this.$router.go(-1);//返回到上一层
      },
      onClickRight() {
        this.$router.push({path:'/login'})
      }
    },
  };
</script>
<style>
  #dd {
    height: 20px;
  }
  #dfzc{
    height: 10px;
  }
</style>
