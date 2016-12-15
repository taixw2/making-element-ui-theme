<template lang="html">
  <div class="Tag">
    <div class="block">
      <el-tag>标签一</el-tag>
      <el-tag type="gray">标签二</el-tag>
      <el-tag type="primary">标签三</el-tag>
      <el-tag type="success">标签四</el-tag>
      <el-tag type="warning">标签五</el-tag>
      <el-tag type="danger">标签六</el-tag>
    </div>
    <div class="block">
      <el-tag :closable="true">标签一</el-tag>
      <el-tag :closable="true" type="gray">标签二</el-tag>
      <el-tag type="primary" :closable="true">标签三</el-tag>
      <el-tag type="success" :closable="true">标签四</el-tag>
      <el-tag type="warning" :closable="true">标签五</el-tag>
      <el-tag type="danger" :closable="true">标签六</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
