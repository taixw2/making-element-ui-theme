<template lang="html">

  <div class="Message">
    <div class="block">
      <el-button type="info" size="small" @click="open('info')">打开Message</el-button>
      <el-button type="success" size="small" @click="open('success')">打开Message</el-button>
      <el-button type="warning" size="small" @click="open('warning')">打开Message</el-button>
      <el-button type="danger" size="small" @click="open('error')">打开Message</el-button>
    </div>
  </div>


</template>

<script>
export default {

  data () {

    return {
    }

  },

  methods : {
    open (type) {

      this.$message({
        message : "这是一条消息提示",
        duration : 0,
        showClose : true,
        type
      });

    }
  }

}
</script>

<style lang="css">
</style>
