<template lang="html">

  <div class="block">

    <el-button :plain="true" type="info" size="small" @click="open(false)">打开MessageBox</el-button>
    <el-button :plain="true" type="info" size="small" @click="open(true)">打开MessageBox2</el-button>
    <el-button :plain="true" type="info" size="small" @click="open('prompt')">打开MessageBox3</el-button>


  </div>

</template>

<script>
export default {

  methods : {
    open (type) {

      if (typeof type == "string") {

        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        })


        return;
      }

      this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          showCancelButton : type
        });

    }
  }


}
</script>

<style lang="css">
</style>
