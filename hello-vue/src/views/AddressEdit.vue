<template>
  <div>

    <top-back :content="title"></top-back>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
  import TopBack from '@/components/TopBack.vue';
  export default {
    name: 'AddressEdit',
    components: { TopBack },
    data() {
      return {
        title:'地址编辑',
        areaList:'',
        searchResult: []
      };
    },

    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
  };

</script>


<style scoped>

</style>
