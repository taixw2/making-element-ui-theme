<template lang="html">

  <div class="Card">
    <div class="block">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="line-height: 30px;">卡片名称</span>
              <el-button style="float: right;" type="primary">操作按钮</el-button>
            </div>
            <div v-for="o in 4" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" v-for="(o, index) in 2">
          <el-card :body-style="{ padding: '0px' }">
            <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
