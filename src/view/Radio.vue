<template lang="html">
  <div class="Radio">
    <div class="block">
      <span class="wrapper">
        <el-radio-group v-model="radio">
          <el-radio disabled :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </span>
    </div>

    <div class="block">
      <span class="wrapper">
        <el-radio-group v-model="radio2" size="large">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州" :disabled="true"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </span>
    </div>

    <div class="block">
      <span class="wrapper">
        <el-radio-group v-model="radio2" size="small">
          <el-radio-button label="中山"></el-radio-button>
          <el-radio-button label="湖南"></el-radio-button>
          <el-radio-button label="成都" :disabled="true"></el-radio-button>
          <el-radio-button label="杭州"></el-radio-button>
        </el-radio-group>
      </span>
    </div>

    <div class="Checkbox">
      <div class="block">
        <span class="wrapper">
          <el-checkbox-group v-model="checkList">
           <el-checkbox label="复选框 A"></el-checkbox>
           <el-checkbox label="复选框 B"></el-checkbox>
           <el-checkbox label="复选框 C"></el-checkbox>
           <el-checkbox label="禁用" disabled></el-checkbox>
           <el-checkbox label="选中且禁用" disabled></el-checkbox>
         </el-checkbox-group>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      radio : 3,
      radio2 : "上海",
      checkList: ['选中且禁用','复选框 A']
    }
  }


}
</script>

<style lang="css">
</style>
