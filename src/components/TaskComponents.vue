<template>
  <div class="main">
    <h1>创建任务</h1>
    <el-form
  
      :label-position="labelPosition"
      :model="forms"
      label-width="110px"
    >
      <el-form-item label="任务名称：">
        <el-input v-model="forms.name"></el-input>
      </el-form-item>

      <el-form-item label="任务时长：">
        <el-input type="text" v-model="forms.duration"></el-input>
      </el-form-item>
      <el-form-item label="任务描述：">
        <el-input type="textarea" v-model="forms.desc" :rows="8"></el-input>
      </el-form-item>

      <slot></slot>
      <el-form-item label="是否紧急：">
        <el-switch v-model="forms.level"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(forms)">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// publishTaskApi
export default {
  data() {
    return {
      labelPosition: "right",
      forms: {
        name: "",
        level: 1,
        desc: "",
        duration: "",
      },
        taskId: "",
    };
  },
  methods: {
     qingkong(){
      this.forms={
        name: "",
        level: 1,
        desc: "",
        duration: "",
      }
    },
    async onSubmit(forms) {
      this.$emit("onSubmit", forms);
    },
    
  },
};
</script>
<style scoped lang='scss'>
.main {
  margin: 50px auto;
  width: 50%;
}
</style>