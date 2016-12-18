<template>

    <div class="wrp">
      <el-row :gutter="20">
        <el-col :span="4" class="_col">
          <router-link to="button">按钮 Button</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="radio">单选/多选 Radio/Checkbox</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="input">输入框/计数器 Input/InputNumber</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="select">选择器 Select</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="switch">开关/滑块 Switch/Slider</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="datepicker">日期选择器 DatePicker</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="table">表格 Table</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="tag">标签 Tag</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="pagination">分页 Pagination</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="badge">红点 Badge</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="alert">警告提示 Alert</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="loading">加载中 <br /> Loading</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="message">消息提示 Message</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="messagebox">弹框 MessageBox</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="notification">通知 MessageBox</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="navmenu">导航菜单 NavMenu</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="tabs">标签页 Tabs</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="breadcrumb">面包屑导航 Breadcrumb</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="dropdown">下拉菜单 Dropdown</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="step">下拉菜单 Step</router-link>
        </el-col>

        <el-col :span="4" class="_col">
          <router-link to="dialog">对话框 Dialog</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="form">表单 Form</router-link>
        </el-col>
        <el-col :span="4" class="_col">
          <router-link to="tooltip">文字提示 Tooltip</router-link>
        </el-col>


      </el-row>
      <div class="_view">
        <router-view></router-view>
      </div>
    </div>

</template>

<style scoped>
.wrp{

  width: 800px;
  margin:auto;
  /*height:80%;*/
  background-color: #fff;
  border: 1px solid #efefef;
  padding: 30px 20px;
  box-sizing: border-box;
}
._view{
  padding-top: 20px;
}
h3{
  font-weight: normal;
  font-size: 22px;
}
._col{
  margin-bottom: 10px;
}
.desc{
  color:#666;
  font-size: 14px
}
</style>

<script type="text/javascript">
  export default {
    data () {
      return {
      }
    },
    methods : {
    },
    components : {

    },
    beforeCreate () {
        //开始创建组件之前
    },
    created () {
      //组件创建后
    },
    beforeMount () {
      //挂载组件前
    },
    mounted () {
      //挂载组件后,此时已经能够调用到文档内的元素
    },
    beforeUpdate () {
      //数据更新前
    },
    updated () {
      //数据更新后
    },
    activated () {
      //组件被激活
    },
    deactivated () {
      //组件停用
    },
    beforeDestroy () {
      //组件被销毁前
    },
    destroyed () {
      //组件被销毁后调用
    }
  }
</script>
