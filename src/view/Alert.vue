<template lang="html">

  <div class="Alert">
    <div class="block">
      <el-alert class="_alert" title="成功提示的文案" type="success"> </el-alert>
      <el-alert class="_alert" title="消息提示的文案" type="info" show-icon> </el-alert>
      <el-alert class="_alert" title="警告提示的文案" type="warning"  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"> </el-alert>
      <el-alert class="_alert" title="成功提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon> </el-alert>
    </div>
  </div>


</template>

<script>
export default {


}
</script>

<style lang="css">
._alert+._alert{
  margin-top: 15px;
}
</style>
