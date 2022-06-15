<template>
  <div>
    <div v-for="item in menu" :lable="item.lable" :key="item.id">
      <el-checkbox
        :indeterminate="item.isIndeterminate"
        v-model="item.checked"
        @change="handleCheckAllChange($event, item)"
        >{{ item.lable }}</el-checkbox
      >
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
       v-model="item.arr"
        @change="handleCheckedCitiesChange($event, item)"
      >
        <el-checkbox
          v-for="children in item.children"
          :label="children"
          :key="children.id"
          >{{ children }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import menus from "@/config/menu.config";
export default {
  data() {
    return {
      checkedCities: [],
      menu: [],
      isIndeterminate: false,
    };
  },
  created() {
    console.log(menus);
    this.menu = menus.map((data) => {
      let item = JSON.parse(JSON.stringify(data));
      item.isIndeterminate = false;
      item.children = item.children
        ? item.children.map((i) => {
            return i.lable;
          })
        : [];
      item.arr = [];
      return item;
    });
  },
  methods: {
    handleCheckAllChange(val, group) {
      group.isIndeterminate = false;
      group.arr = val ? group.children : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value, item) {
      let checkedCount = value.length;
      item.checked = checkedCount === item.children.length;
      item.isIndeterminate =
        checkedCount > 0 && checkedCount < item.children.length;
      console.log(item.isIndeterminate);
    },
  },
};
</script>