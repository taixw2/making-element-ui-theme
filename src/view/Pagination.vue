<template lang="html">
  <div class="Pagination">
    <div class="block">
      <el-pagination
       layout="prev, pager, next"
       :total="50">
     </el-pagination>
    </div>

    <div class="block">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
