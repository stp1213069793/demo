<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header flex-between">
        <div class="grid-content align-center">
          <img class="icon-logo" src="../assets/icon-menu.png" alt="" />
          现代学徒云平台
        </div>
        <div class="grid-content align-center font-size_12">
          <div>武汉市 2017-07-20 15:00 星期三 21-22℃ 晴 风力 2级 风向 微风</div>
          <img
            class="icon-headportrait mr-10"
            src="../assets/icon_avatar.png"
            alt=""
          />
          <span class="user" v-if="userInfo">hi~{{ userInfo.avatarName }}</span>
          <img
            @click="signOut"
            class="icon-close"
            src="../assets/icon-close.png"
            alt=""
          />
          <span @click="signOut">退出</span>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            unique-opened
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#0c1c35"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu
              :index="items.name"
              v-for="items in data"
              :key="items.name"
            >
              <template slot="title">
                <i :class="items.meta.icon"></i>
                <span>{{ items.lable }}</span>
              </template>

              <el-menu-item
                v-for="children in items.children"
                :key="children.name"
                :index="children.name"
                @click="$navigator(children.name)"
                >{{ children.lable }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getUesrInfoApi, logOutApi } from "@/api/api";
import data from'@/config/menu.config'
export default {
  data() {
    return {
      defaultActive: "",
      userInfo: [],
      data
    };
  },
  created() {
    this.defaultActive=this.$route.name;
    getUesrInfoApi().then((res) => {
      this.userInfo = res.data.data;
    });
    // 不要用循环
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      console.log(index);
      console.log(indexPath);
    },
    signOut() {
      logOutApi();
      sessionStorage.setItem("token", "");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #3981ed;
  color: #fff;
  min-width: 800px;
  & .grid-content {
    padding-right: 4px;
  }
  & .font-size_12 {
    font-size: 12px;
  }
  & .icon-logo {
    width: 40px;
    height: 30px;
    vertical-align: middle;
  }
  & .icon-headportrait {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 20px;
    margin-left: 20px;
  }
  & .user {
    margin-right: 15px;
  }
  & .icon-close {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 7px;
  }
}
.el-aside {
  background-color: #0c1c35;
  color: #fff;
  height: calc(100vh - 60px);
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.el-main {
  height: calc(100vh - 60px);
  padding: 0;
  & .title {
    display: flex;
  }
}
</style>

