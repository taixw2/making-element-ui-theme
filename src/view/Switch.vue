<template lang="html">
  <div class="switch">
    <div class="block">
      <el-switch v-model="value1" on-text="" off-text=""> </el-switch>
      <el-switch disabled v-model="value1"> </el-switch>
    </div>

    <div class="block">
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <el-slider v-model="value3" disabled></el-slider>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value1 : false,
      value2 : 0,
      value3:0
    }
  }
}
</script>

<style lang="css">
</style>
