<template>
  <div class="ceshi">
    
 
   
    <div id="app1">
      <h1 ref="h1Ele">这是H1</h1>
      <hello ref="ho"></hello>

      <button @click="getref">获取H1元素</button>
    </div>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <button @click="shu($event)">获取数据</button>
    </div>
 <div >
      <title-components  icon="el-icon-location">
      <span>123我爱你</span>
    </title-components>
    <title-components  icon="el-icon-location">
      <span>123我爱你</span>
    </title-components>
    <title-components  icon="el-icon-location">
      <span>123我爱你</span>
    </title-components>
    <title-components  >
      <template slot="desc"><span>这是我</span></template>
    </title-components>
 </div>

    <el-title>
      <span>我是123</span>
    </el-title>
    <el-title>
     <template><span>这是我</span></template>
    </el-title>
    <el-title>
      <span>我是123</span>
    </el-title>
    <el-title >
      <span>我是123</span>
    </el-title>
    <el-title icon="el-icon-location">
     <!-- <span ></span> -->
     <span>1erq5</span>
    </el-title>
  </div>
</template>

<script>

// import TitleComponents from '@/components/TitleComponents.vue';
export default {
  data() {
    return {

      province: "",
      city: "",
      citydata: "",
      county: "",
      countydata: "",
    };
  },

  created() {
    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 213, 546, 5765, 43, 32, 87];
    // function find(arr, cb) {
    //   let res;
    //   for (let i = 0; i < arr.length; i++) {
    //     let resd = cb(arr[i]);
    //     if (resd) {
    //       res = resd;
    //       break;
    //     }
    //   }
    //   return res;
    // }
    // console.log(
    //   find(arr, (val) => {
    //     // console.log('执行了回调函数');
    //     if (val > 7) {
    //       return val;
    //     }
    //   })
    // );
  },

  methods: {
    shu(e) {
      console.log(e);
    },
    sheng() {
      var data = this.data.find((item) => item.code == this.province);
      this.citydata = data.children;
      this.county = "";
      this.city = "";
    },
    shi() {
      var data = this.citydata.find((item) => item.code == this.city);
      this.countydata = data.children;
      this.county = "";
    },
    getref() {
      // 表示从 $refs对象 中, 获取 ref 属性值为: h1ele DOM元素或组件
      // console.log(this.$refs);
      // console.log(this.$refs.color);
      console.log(this.$refs.h1Ele.innerText);
      this.$refs.h1Ele.style.display = "none"; // 修改html样式

      console.log(this.$refs.ho.msg); // 获取组件数据
      console.log(this.$refs.ho.test); // 获取组件的方法
    },
  },
};
</script>

<style lang="scss" scoped>
.ceshi{
  margin: 10px 20px;
}
h1 {
  color: green;
}

</style>