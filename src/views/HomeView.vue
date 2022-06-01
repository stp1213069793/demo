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
          <span class="user" v-if="userInfo">hi~{{userInfo.avatarName }}</span>
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
            :default-active="data[0].id"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#0c1c35"
            text-color="#fff"
            active-text-color="#ffd04b"
            v-for="items in data"
            :key="items.id"
          >
            <el-menu-item
              v-if="!items.children"
              :index="items.id"
              @click="navigator(items.path)"
            >
              <i class="el-icon-setting"></i>
              <span slot="title">{{ items.groupName }}</span>
            </el-menu-item>

            <el-submenu :index="items.id" v-else>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ items.groupName }}</span>
              </template>
              <!-- <el-menu-item-group> -->
                <el-menu-item
                  v-for="children in items.children"
                  :key="children.id"
                  :index="children.id"
                  @click="navigator(children.path)"
                  >{{ children.lable }}</el-menu-item
                >
              <!-- </el-menu-item-group> -->
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
export default {
  data() {
    return {
      // username:'',
      userInfo: [],
      data: [
        {
          id: "1",
          groupName: "题库管理",
          children: [
            {
              id: "1001",
              lable: "题库管理",
              path: "questionBank",
            },
            {
              id: "1002",
              lable: "HTML题库",
              path: "htmlBank",
            },
            {
              id: "1003",
              lable: "CSS题库",
              path: "cssBank",
            },
            {
              id: "1004",
              lable: "JS题库",
              path: "jsBank",
            },
          ],
        },
        {
          id: "2",
          groupName: "匹配比赛",
        },
        {
          id: "3",
          groupName: "注册",
          path: "register",
        },
        {
          id: "4",
          groupName: "登录",
          path: "login",
        },
        {
          id: "5",
          groupName: "测试",
          path: "ceshi",
        },
        {
          id: "6",
          groupName: "账号设置",
          children: [
            {
              id: "6001",
              lable: "个人资料",
              path: "personInfo",
            },
            {
              id: "6002",
              lable: "权限管理",
              path: "AuthorityMmanagement",
            },
          ],
        },
        {
          id: "7",
          groupName: "任务系列",
          children: [
            {
              id: "7001",
              lable: "任务列表",
              path: "queryTask",
            },
            {
              id: "7002",
              lable: "创建任务",
              path: "ctreateTask",
            },
          ],
        },
        {
          id: "8",
          groupName: "聊天页面",
          path: "chatInterface",
        },
        {
          id: "9",
          groupName: "用户信息列表",
          path: "userInformationList",
        },
      ],
    };
  },
  created() {
    getUesrInfoApi().then((res) => {
      this.userInfo = res.data.data;
      console.log(res);
      if (res.data.status == 401) {
        this.$router.push({
          name: "login",
        });
      }
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
    navigator(name) {
      if (this.$route.name == name) return;
      this.$router.push({
        name: name,
      });
    },
    async signOut() {
      let res = await logOutApi();
      if (res.data.status == 1) {
        sessionStorage.removeItem("token");
        this.$router.push("/");
      }
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

