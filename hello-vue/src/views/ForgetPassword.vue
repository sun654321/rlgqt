<template>
  <div class="forpas">

    <top-back :content="title"></top-back>
    <div id="sser">
    </div>
    <img src="../../src/static/images/1.gif" alt>

    <div id="dd1">
    </div>

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
    </van-cell-group>

    <div id="sserr">

    </div>

    <van-button icon="good-job-o"  round type="info" size="normal" @click="tj">点击进入下一步</van-button>

</div>
</template>

<script>
  import axios from 'axios';
  import TopBack from '@/components/TopBack.vue';

  export default {
    name: 'ForgetPassword',
    components: { TopBack },
    data() {
      return {
        title:'修改密码',
        username: '',
        datauser:''
      };
    },
    methods: {
      tj() {
        //保存当前对象
        var this_ =this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('username', this.username);
        //执行请求获取后端数据
        axios.post('/portal/user/forget_get_question.do', params)
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
              this_.$router.push({path:'/submitanswers',query:{da:this_.datauser,da1:this_.username}})
              this_.username=''
            }
          });
      },
      onClickLeft() {
        this.$router.go(-1);//返回到上一层
      },
    }
  };
</script>
<style>
  #sser{
    height: 40px;

  }
  #dd1{
    height: 20px;
  }
  #sserr{
    height: 30px;
  }
  .forpas{
    text-align:center;
    margin: auto;
  }

</style>
