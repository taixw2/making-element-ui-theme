<template lang="html">
  <div class="Dialog">
    <div class="block">
      <el-button type="text" @click="dialogFormVisible = true"> Dialog</el-button>

      <el-dialog title="收货地址" v-model="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      dialogFormVisible : true,
      formLabelWidth : "80px",
      form : {
        name : "",
        region : ""
      }
    }
  },

  methods : {
    dialogFormVisible () {
        this.dialogFormVisible = !this.dialogFormVisible;
    }
  }

}
</script>

<style lang="css">
</style>
