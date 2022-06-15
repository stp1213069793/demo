<template>
  <div>
    <div class="custom-tree-container">
      <div class="block">
        <button @click="addOuter">添加外层</button>
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ data.title }}</span>
            <span>{{ data.pid }}</span>
            <span>
              <el-button type="text" size="mini" @click="() => append(data)">
                Append
              </el-button>
              <el-button
                type="text"
                size="mini"
                v-if="!data.children.length"
                @click="() => remove(node, data)"
              >
                Delete
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => update(node, data)"
              >
                update
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
    <!-- <div>
      <el-dialog title="创建权限" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="权限名称" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限pid" :label-width="formLabelWidth">
            <el-input v-model="form.pid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限类型" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择权限类型">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="determine">确 定</el-button>
        </div>
      </el-dialog>
    </div> -->

    <div>
      <el-dialog title="修改权限" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
          <el-form-item label="权限名称" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="权限类型" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择权限类型">
              <el-option label="侧边栏" :value="1"></el-option>
              <el-option label="页面" :value="2"></el-option>
              <el-option label="功能" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-if="names == 'change'"
            label="所在目录"
            :label-width="formLabelWidth"
          >
            <el-select v-model="form.pid" placeholder="请选择">
              <el-option
                v-for="item in catalogue"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" v-if="names == 'change'" @click="determine1"
            >修改</el-button
          >
          <el-button type="primary" v-else @click="determine">创建</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// let id = 1000;
import {
  getPermissionApi,
  deletePermissionApi,
  createdPermissionApi,
  updatePermissionApi,
} from "@/api/api";
export default {
  data() {
    return {
      data: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        title: "",
        type: "", //类型   1代表左侧栏  2代表页面  3代表功能
        pid: null, //pid如果为空就是最大的一级  如果等于某项的id就是它的子级
      },
      names: "",
      formLabelWidth: "120px",
      catalogue: [],
    };
  },
  created() {
    this.getQuanXian();
  },
  methods: {
    addOuter() {
      this.dialogFormVisible1 = true;
      this.form.pid=null
    },
    async getQuanXian() {
      let res = await getPermissionApi({ pagination: false });
      let data = res.data.data.rows;
      if (res.data.status == 1) {
        data.forEach((item) => {
          item.children = data.filter((i) => i.pid == item.id);
          this.catalogue.push({ id: item.id, title: item.title });
        });
        
        this.data = data.filter((items) => !items.pid);
        console.log(this.catalogue);
      } else {
        this.$message({ type: "warning", message: "获取失败" });
      }
    },
    append(data) {
      this.names = "create";
      this.dialogFormVisible1 = true;
      this.form.title = "";
      this.form.type = data.type;
      this.form.pid = data.id;
    },
    async determine() {
      let res = await createdPermissionApi(this.form);
      console.log(res);
      this.dialogFormVisible1 = false;
      this.getQuanXian();
    },
    open(node, data) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await deletePermissionApi({ id: [data.id] });
          if (res.data.status == 1) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getQuanXian();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    remove(node, data) {
      this.open(node, data);
    },
    update(node, data) {
      this.names = "change";
      console.log(data);
      this.form.type = data.type;
      this.form.pid = data.pid;
      this.form.title = data.title;
      this.dialogFormVisible1 = true;
      this.form.id = data.id;
    },
    async determine1() {
      let res = await updatePermissionApi(this.form);
      console.log(res);
      console.log(this.form.pid);
      this.dialogFormVisible1 = false;
      // this.form.title=''
      this.form = {};
      this.catalogue = [];
      this.getQuanXian();
    },
  },
};
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
  