<template lang="html">
  <div class="input">

    <div class="block">
      <el-input class="inline-input" size="large" placeholder="large" v-model="input6"> </el-input>
      <el-input class="inline-input" :disabled="true" placeholder="default" v-model="input7"> </el-input>
      <el-input class="inline-input" size="small" icon="time" placeholder="small" v-model="input8"> </el-input>
      <el-input class="inline-input" size="mini" placeholder="mini" v-model="input9">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>

    <div class="block">
      <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
      <el-input-number v-model="num2" :disabled="true"></el-input-number>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      select: '',
      num1 : 1
    }
  }
}
</script>

<style lang="css">
.inline-input+.inline-input{
  margin-top: 20px;
}
</style>
