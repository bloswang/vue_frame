<template>
    <div>
      <el-select v-model="value" @change="selectChange"  placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '1-1',
          label: '黄金糕'
        }, {
          value: '1-2',
          label: '双皮奶'
        }, {
          value: '1-3',
          label: '蚵仔煎'
        }, {
          value: '1-4',
          label: '龙须面'
        }, {
          value: '1-5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods:{
      selectChange(val){
        console.log(val)
      }
    }
  }
</script>

<style>

</style>
