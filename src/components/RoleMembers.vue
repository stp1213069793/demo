<template>
  <div class="role-members">
    <div class="role-members-header flex-between">
      <div>
        <span class="mr-10">角色名字</span>
        <span class="el-icon-user"></span>
        <span>1</span>
      </div>
      <div class="flex">
        <div class="mr-30">已离职成员</div>
        <div>邀请该成员加入本组织</div>
      </div>
    </div>
    <div class="role-members-main">
      <div class="flex-between">
        <div>
            <el-select></el-select>
            <el-button>
                <span class="el-icon-s-fold"></span>
            </el-button>
        </div>
        <div>
             <el-button type="primary">
                <span class="el-icon-plus"></span>     
                <span>添加成员</span>     
            </el-button>
             <el-button >批量导入/导出</el-button>
             <el-button >变更部门</el-button>
             <el-button type="danger" plain>操作离职</el-button>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          size='small'
          max-height='360'
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column label="姓名" width="230">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="accountStatus" label="账号状态" width="237">
          </el-table-column>
          <el-table-column prop="phone" label="手机" width="200">
          </el-table-column>
          <el-table-column prop="department" label="部门" width="162">
          </el-table-column>
          <el-table-column  label="部门" width="100">
              <template >
                 <el-tag><span class="el-icon-arrow-left"></span></el-tag>
              </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="role-members-pages flex-between pt-20">
        <div>
<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949"
   class="mr-10"
  >
</el-switch>
<span>仅显示部门的直属成员</span>
        </div>
        <div>
            <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
        {
          name: "浩然正气",
          accountStatus: "正常",
          phone: "13456789123",
          department: "13456789123",
        },
      ],
      multipleSelection: [],
      value:''
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped lang="scss">
.role-members {
    // font-size: 14px;
  & .role-members-header {
    padding: 10px 0 20px 0;
  }
  & .role-members-main{
      & .el-table{
        ::-webkit-scrollbar{
            height: 0;
            width: 0;
        }
      }
  }
//   & .role-members-pages{
//       padd
//   }
}
</style>