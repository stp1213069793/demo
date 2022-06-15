export default
    [
        {
          name: "question",
          lable: "题库管理",
          meta:{
            icon:'el-icon-eleme'
          },
          checked:false,
          children: [
            {
              lable: "题库管理",
              path: "/questionBank",
              name: "questionBank",
            },
            {
              lable: "HTML题库",
              path: "/htmlBank",
              name: "htmlBank",
            },
            {
              lable: "CSS题库",
              path: "/cssBank",
              name: "cssBank",
            },
            {
              lable: "JS题库",
              path: "/jsBank",
              name: "jsBank",
            },
            {
              lable: "匹配比赛",
            },
          ],
        },
        {
          name: "user",
          lable: "账号设置",
            meta:{
            icon:'el-icon-eleme'
          },
          checked:false,
          children: [
            {
              lable: "个人资料",
              path: "/personInfo",
              name: "personInfo",
            },
            
            {
              lable: "用户信息列表",
              path: "/userInformationList",
              name: "userInformationList",
            },
          ],
        },
        {
          name: "task",
          lable: "任务中心",
            meta:{
            icon:'el-icon-eleme'
          },
          checked:false,
          children: [
            {
              lable: "任务列表",
              path: "/queryTask",
              name: "queryTask",
            },
            {
              lable: "创建任务",
              path: "/ctreateTask",
              name: "ctreateTask",
            },
            {
              lable: "我的任务",
              path: "/chatInterface",
              name: "chatInterface",
            },
          ],
        },
        {
          name: "role",
          lable: "角色管理",
            meta:{
            icon:'el-icon-eleme'
          },
          checked:false,
          children: [
            {
              lable: "角色管理",
              path: "/AuthorityMmanagement",
              name: "AuthorityMmanagement",
            },
            {
              lable: "创建角色",
              path: "/newRole",
              name: "newRole",
            },
            {
              lable: "权限配置",
              path: "/permissionConfiguration",
              name: "permissionConfiguration",
            },
        
          ],
        },
        {
          name: "other",
          lable: "其它",
            meta:{
            icon:'el-icon-eleme'
          },
          checked:false,
          children: [
            {
              lable: "关于我们",
              path: "/queryTask",
              name: "queryTask",
            },
          ],
        },
      ]

 