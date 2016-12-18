<template lang="html">

  <div class="Dropdown">

    <div class="block">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
