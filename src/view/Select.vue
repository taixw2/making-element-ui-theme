<template lang="html">
  <div class="select">

    <div class="block">
      <el-select class="_select" size="large" v-model="value" placeholder="请选择">
         <el-option
           v-for="item in options"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>

      <el-select class="_select" v-model="value" placeholder="请选择">
         <el-option
           v-for="item in options"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>

      <el-select size="small" class="_select" v-model="value" placeholder="请选择">
         <el-option
           v-for="item in options"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>


      <el-select disabled class="_select" v-model="value" placeholder="请选择">
         <el-option
           v-for="item in options"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>


      <el-select multiple class="_select" v-model="value2" placeholder="请选择">
         <el-option
           v-for="item in options"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>





    </div>

  </div>
</template>

<script>
export default {
  data() {
     return {
       options: [{
         value: '选项1',
         label: '黄金糕'
       }, {
         value: '选项2',
         label: '双皮奶'
       }, {
         value: '选项3',
         label: '蚵仔煎'
       }, {
         value: '选项4',
         label: '龙须面'
       }, {
         value: '选项5',
         label: '北京烤鸭'
       }],
       value: '',
       value2 : []
     }
   }
}
</script>

<style lang="css">
._select+._select{
  margin-top: 12px;
}
</style>
