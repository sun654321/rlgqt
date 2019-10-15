<template>
  <div id="dd">
    <!--搜索框-->
      <van-row>
      <van-col span="24">
        <van-search
          v-model="valuess"
          placeholder="请输入搜索关键词"
          show-action
          background="#c82515"
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch" style="color:white">搜索</div>
        </van-search>
      </van-col>
    </van-row>

    <!--图片轮播-->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="dd"/>
      </van-swipe-item>
    </van-swipe>

    <!--功能栏-->
    <van-swipe>
      <van-swipe-item>
        <van-grid square>
          <van-grid-item
            v-for="value in icons"
            :icon="value.icon"
            :text="value.text"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid square>
          <van-grid-item
            v-for="value in icons2"
            :icon="value.icon"
            :text="value.text"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>


    <van-notice-bar
      text="通知内容：商城活动即将来临！商城活动即将来临！商城活动即将来临！"
      left-icon="volume-o"
    />

    <!---->
    <van-row>
      <van-col span="12">
        <van-panel title="">
          <van-image
            width="100"
            height="100"
            src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/76327/24/7494/166690/5d5a7346E521dde23/c399d644f61cf94b.jpg!q70.dpg.webp"
          />
          <p >名称:{{productlist.name}}</p>
          <p style="color: red">价格:¥{{productlist.price}}</p>
        </van-panel>
      </van-col>

      <van-col span="12">
        <van-panel title="">
          <van-image
            width="100"
            height="100"
            src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t151/304/1828204199/116532/7801c860/53ba80f9Nfa2ee9cd.jpg!q70.dpg.webp"
          />
          <p >名称:{{productlist.name}}</p>
          <p style="color: red">价格:¥{{productlist.price}}</p>
        </van-panel>
      </van-col>
    </van-row>

    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 30px' }">
      没有更多了
    </van-divider>
    <div id="di">
    </div>

    <!--<van-tabbar v-model="active" class="vbbg">-->
    <!--<van-tabbar-item icon="home-o"to="/">主页</van-tabbar-item>-->
    <!--<van-tabbar-item icon="apps-o" to="login">分类</van-tabbar-item>-->
    <!--<van-tabbar-item icon="shopping-cart-o" to="cart">购物车</van-tabbar-item>-->
    <!--<van-tabbar-item icon="contact" to="mycenter">个人中心</van-tabbar-item>-->
    <!--</van-tabbar>-->

  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        valuess:'',
        active:0,
        productlist: '',
        productss:'',
        images: ['//m.360buyimg.com/mobilecms/s700x280_jfs/t1/84493/31/12888/93587/5d9e930cE13c867b1/3160f27af69c6e57.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/65763/3/11768/100131/5d91c329E19e31122/c5b58f9bf5926402.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/44735/33/13081/147997/5da033daEb5e1d5c4/b733212786c3c0cf.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/29602/28/6448/147417/5c5018e1Ed6bdfbfe/44777b12d731ad4b.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        ],
        icons: [{
          text: '超市',
          icon: '//gtms03.alicdn.com/tps/i3/TB1rOnbIFXXXXceXpXXrywt4VXX-120-120.png'
        },
          {
            text: '数码电器',
            icon: '//gw.alicdn.com/tps/TB1ydPnKFXXXXa9XpXXXXXXXXXX-120-120.png'
          },
          {
            text: '服饰',
            icon: 'https://gw.alicdn.com/tfs/TB18l5SiHvpK1RjSZPiXXbmwXXa-86-86.png'
          },
          {
            text: '生鲜',
            icon: 'https://gw.alicdn.com/tfs/TB17s9_iNjaK1RjSZFAXXbdLFXa-86-86.png'
          },
          {
            text: '到家',
            icon: 'https://gw.alicdn.com/tfs/TB1n47Fx9zqK1RjSZPcXXbTepXa-129-129.png'
          },
          {
            text: '充值缴费',
            icon: 'https://gw.alicdn.com/tfs/TB1kJMeSCzqK1RjSZPxXXc4tVXa-200-200.png'
          },
          {
            text: '9.9元拼',
            icon: 'https://gw.alicdn.com/tfs/TB14o1UiFzqK1RjSZFCXXbbxVXa-85-85.png'
          },
          {
            text: '领劵',
            icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png'
          },

        ],
        icons2: [{
          text: '赚钱',
          icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png'
        },
          {
            text: 'PLUS会员',
            icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png'
          },
          {
            text: '沃尔玛',
            icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png'
          },
          {
            text: '物流查询',
            icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png'
          },
          {
            text: '全部',
            icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png'
          }
        ],
      }
    },

    methods: {
      getProducts() {
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('productId', 10001);
        //执行请求获取后端数据
        axios.post('/portal/product/detail.do', params)
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
              this_.productlist = datas.data.data;
            }
          });
      },
      onSearch(){
        //保存当前对象
        var this_ = this;
        //封装前端数据传递到后端
        var params = new URLSearchParams();
        params.append('keyword', this.valuess);


        //执行请求获取后端数据
        axios.post('/portal/product/list.do', params)
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
              this_.productss = datas.data.data
            }
          });
      }
    },
    activated: function () {
      this.getProducts();
    }
  };
</script>
<style scoped>
  .dd {
    height: 100%;
    width: 100%;
  }
   .item {
     display: inline-block;
     width: 22px;
     margin-right: 5px;
     color: #fff;
     font-size: 12px;
     text-align: center;
     background-color: #1989fa;
   }
  /*.vbbg{*/
  /*background-color:silver !important;*/
  /*}*/
  #di{
height: 40px;
    background-color: cornsilk;
  }
  #dd{
    text-align:center;
    margin: auto;
  }
</style>
