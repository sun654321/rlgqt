<template>
<div>

  <top-back :content="title"></top-back>

  <van-tree-select
    height="200vw"
    :items="items"
    :main-active-index.sync="activeIndex"
  >
    <template slot="content">
      <van-panel title="分类列表" >
      </van-panel>
      <div class=cera>
        <van-row>
          <van-col span="1"></van-col>
          <van-col span="10"><van-image v-if="activeIndex === 0" src="//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png" /></van-col>
          <van-col span="1"></van-col>
          <van-col span="10"><van-image v-if="activeIndex === 0" src="//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png"></van-image></van-col>
          <van-col span="2"></van-col>
        </van-row>

      <van-image v-if="activeIndex === 1" src="//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png" />
      <van-image v-if="activeIndex === 2" src="//img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg" />
      <van-image v-if="activeIndex === 3" src="//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg" />
      <van-image v-if="activeIndex === 4" src="//img12.360buyimg.com/focus/s140x140_jfs/t20482/61/128269126/48485/836a6d71/5afd574eNb1ad35ae.jpg" />
      <van-image v-if="activeIndex === 5" src="//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg" />
      </div>
    </template>
  </van-tree-select>

</div>

</template>

<script>

  import TopBack from '@/components/TopBack.vue';

  export default {
    name: 'Category',
    components: { TopBack },
    data() {
      return {
        title: '商品分类',
        activeIndex: 0,
        items: [{ text: '热门推荐' }, { text: '手机电器' },
          { text: '家用电器' },{ text: '电脑办公' },
          { text: '个户清洁' },{ text: '汽车生活' }]
      }
    }
  };
</script>

<style scoped>
  .cera{
    height: 100%;
    width: 100%;
  }
</style>
