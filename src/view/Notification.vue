<template lang="html">
  <div class="Notification">
    <div class="block">
      <el-button size="small" @click="open()">打开Message</el-button>
      <el-button type="success" size="small" @click="open('success')">打开Message</el-button>
      <el-button type="warning" size="small" @click="open('warning')">打开Message</el-button>
      <el-button type="info" size="small" @click="open('info')">打开Message</el-button>
      <el-button type="danger" size="small" @click="open('error')">打开Message</el-button>
    </div>
  </div>

</template>

<script>
export default {
  methods : {
    open (type = 'default') {
      this.$notify({
        title: type,
        message: '这是一条'+type+'的提示消息',
        duration : 0,
        type
      });
    }
  }
}
</script>

<style lang="css">
</style>
