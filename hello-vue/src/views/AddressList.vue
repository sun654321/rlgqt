<template>

  <div>
    <top-back :content="title"></top-back>

    <van-address-list
      id="vga"
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    ></van-address-list>

  </div>

</template>


<script>
  import TopBack from '@/components/TopBack.vue';

  export default {

    name: 'AddressList',
    components: { TopBack },
    data() {
      return {
        title:'收货地址列表',
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
        disabledList: [
          {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
          }
        ]
      }
    },

    methods: {
      onAdd() {
        Toast('新增地址');
      },
      onEdit(item, index) {
        Toast('编辑地址:' + index);
      }
    }

  };
</script>

<style scoped>
  #vga{
    bottom: 50px !important;
  }
</style>
