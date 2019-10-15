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
        v-model="question"
        required
        clearable
        label="密保问题"
        right-icon="question-o"
        placeholder="请输入密保问题"
        @click-right-icon="$toast('请输入密保问题')"
      />
      <van-field
        v-model="answer"
        required
        clearable
        label="密保答案"
        right-icon="question-o"
        placeholder="请输入密保答案"
        @click-right-icon="$toast('请输入密保答案')"
      />
    </van-cell-group>

    <div id="sserr">

    </div>
    <van-button icon="good-job-o" round type="info" size="normal" @click="tj">点击进入下一步</van-button>
  </div>
</template>

<script>
  import axios from 'axios';
  import TopBack from '@/components/TopBack.vue';
  import  store from  '@/store';

  export default {
    name: 'tjda',
    store,
    components: { TopBack },
    data() {
      return {
        title: '验证密保问题',
        username: this.$route.query.da1,
        question: this.$route.query.da,
        answer: '',
        datauser: '',
      };
    },
    methods: {
      tj() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('question', this.question);
        params.append('answer', this.answer);

        //执行请求获取后端数据
        axios.post('/portal/user/forget_check_answer.do', params)
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status;
            if (status !== 0) {
              //弹出数据
              this_.$dialog.alert({
                message: datas.data.msg
              });
            } else {
              //获取后端数据
              this_.datauser = datas.data.data;
              this_.$router.push({path:'/resetpassword',query:{dat:this_.datauser,dat1:this_.username}})

               this_.username='',
                this_.question='',
                this_.answer=''
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
  #sser {
    height: 20px;

  }

  #dd1 {
    height: 20px;
  }

  #sserr {
    height: 30px;
  }

  #qq {
    width: 50%;
    float: left;
  }

  #wx {
    float: right;
    width: 50%;
  }

  #qq1 {
    height: 20%;
    width: 20%;
    margin-left: 100px
  }

  #wx1 {
    height: 20%;
    width: 20%;
    margin-right: 100px
  }

  #qq2 {
    margin-left: 100px
  }

  #wx2 {
    margin-right: 100px
  }

  .forpas {
    text-align: center;
    margin: auto;
  }

  #sssq {
    height: 50px;
  }

  #ssqq {
    height: 20px;
  }
</style>

