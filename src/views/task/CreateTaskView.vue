<template>
  <div>
    <task-components @submit="createTask" ref="form"> </task-components>
  </div>
</template>
<script>
import { createTaskApi, publishTaskApi } from "@/api/api";

export default {
  data() {
    return {};
  },
  created() {
    // this.$on('onSubmits',(val)=>{
    //   console.log(val);
    //   this.cs=val
    // })
    // console.log(this.cs);
  },
  methods: {
    async releaseTask(taskId, userIds) {
      await publishTaskApi({
        taskId,
        userIds,
      });
    },
    open() {
      this.$confirm("创建成功", "提示", {
        cancelButtonText: "查看任务列表",
        confirmButtonText: "继续创建",
        type: "success",
      })
        .then(() => {
          this.$refs.form.initForm();
        })
        .catch(() => {
          this.$router.push({
            name: "queryTask",
          });
        });
    },
    async createTask(form, userIds) {
      let res = await createTaskApi(form);
      let taskId = res.data.data[0].id;
      await this.releaseTask(taskId, userIds);
      this.open;
    },
    // async createTask(forms) {
    //   console.log(forms);
    //   if (forms.level == true) {
    //     forms.level = 1;
    //   }
    //   if (forms.level == false) {
    //     forms.level = 0;
    //   }
    //   delete forms.options
    //   let res = await createTaskApi(forms);
    //   console.log(res);
    //   if (res.data.status == 1) {
    //     let resd = await publishTaskApi({
    //       userIds: forms.userId,
    //       taskId: res.data.data[0].id,
    //     });
    //     if (resd.data.status == 1) {
    //       this.$confirm("创建成功", "提示", {
    //         cancelButtonText: "查看任务列表",
    //         confirmButtonText: "继续创建",
    //         type: "success",
    //       })
    //         .then(() => {
    //           this.$refs.form.qingkong();
    //           this.$message({
    //             type: "info",
    //             message: "请创建",
    //           });
    //         })
    //         .catch(() => {
    //           this.$router.push({
    //             name: "queryTask",
    //           });
    //         });
    //     }
    //   }
    // },
  },
};
</script>