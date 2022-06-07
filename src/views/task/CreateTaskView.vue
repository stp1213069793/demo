<template>
  <div>
    <task-components @onSubmit="onSubmits" ref="form">
      <el-form-item label="执行人：">
        <el-select v-model="userId" filterable multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </task-components>
  </div>
</template>
<script>
import { createTaskApi, queryUserListApi, publishTaskApi } from "@/api/api";

export default {
  data() {
    return {
      userId: [],
  
      options: [
        {
          value: "",
          label: "",
        },
      ],
    };
  },
  async created() {
    let resc = await queryUserListApi({ pagination: false });

    this.options = resc.data.data.data.rows;
  },
  methods: {
    async onSubmits(forms) {
      console.log(this.forms);
      if (forms.level == true) {
        forms.level = 1;
      }
      if (forms.level == false) {
        forms.level = 0;
      }

      let res = await createTaskApi(forms);
      console.log(res);
      if (res.data.status == 1) {
        let resd = await publishTaskApi({
          userIds: this.userId,
          taskId: res.data.data[0].id,
        });
        if (resd.data.status == 1) {
          this.$confirm("创建成功", "提示", {
            cancelButtonText: "查看任务列表",
            confirmButtonText: "继续创建",
            type: "success",
          })
            .then(() => {
              this.$message({
                type: "info",
                message: "请创建",
              });
              this.$refs.form.qingkong()
              this.userId=[]
            })
            .catch(() => {
              this.$router.push({
                name: "queryTask",
              });
            });
        }
      }
    },
  },
};
</script>