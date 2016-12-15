<template>

    <div class="wrp">
      <el-row :gutter="20">
        <el-col :span="4">
          <router-link to="button">按钮 Button</router-link>
        </el-col>

        <el-col :span="4">
          <router-link to="radio">单选/多选 Radio/Checkbox</router-link>
        </el-col>

        <el-col :span="4">
          <router-link to="input">输入框/计数器 Input/InputNumber</router-link>
        </el-col>

        <el-col :span="4">
          <router-link to="select">选择器 Select</router-link>
        </el-col>



      </el-row>

      <router-view></router-view>
    </div>

</template>

<style scoped>
.wrp{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 800px;
  margin:auto;
  /*height:80%;*/
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 30px 20px;
  box-sizing: border-box;
}
h3{
  font-weight: normal;
  font-size: 22px;
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
