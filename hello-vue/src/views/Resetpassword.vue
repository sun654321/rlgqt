<template>
  <div class="forpas">
    <top-back :content="title"></top-back>

    <img src="../../src/static/images/1.gif" alt>

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
      />
      <van-field
        v-model="passwordNew"
        required
        clearable
        label="新密码"
        right-icon="question-o"
        placeholder="请输入新密码"
        @click-right-icon="$toast('请输入新密码')"
      />
    </van-cell-group>


    <van-button icon="good-job-o" round type="info" size="normal" @click="tj">点击修改</van-button>
  </div>
</template>

<script>
  import axios from 'axios';
  import TopBack from '@/components/TopBack.vue';
  import  store from  '@/store';

  export default {
    name: 'Resetpassword',
    components: { TopBack },
    store,
    data() {
      return {
        title: '设置新密码',
        username: this.$route.query.dat1,
        passwordNew: '',
        forgetToken: this.$route.query.dat,
        datauser: ''
      };
    },
    methods: {
      tj() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('passwordNew', this.passwordNew);
        params.append('forgetToken', this.forgetToken);

        //执行请求获取后端数据
        axios.post('/portal/user/forget_reset_password.do', params)
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status;
            if (status===0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
              this_.$router.push({path:'/mycenter'})
            }

            else {
              //获取后端数据
              this_.$dialog.alert({
                message: datas.data.msg

              });
              this_.$router.push({path:'/forgetpassword'})
                this_.username='',
                this_.passwordNew='',
                this_.forgetToken=''
            }
          });
      },
      onClickLeft() {
        this.$router.go(-1);//返回到上一层
      }
    }
  };
</script>
<style>
  .forpas {
    text-align: center;
    margin: auto;
  }
</style>
