<template>
  <div class="task">
    <div class="left">
      <div class="flex-center">
        <div>
          <span class="el-icon-s-unfold"></span>
          <span>#1</span>
        </div>
        <div>
          <span class="el-icon-view"></span>
        </div>
        <div>
          <span class=""></span>
          <span class=""></span>
          <span class=""></span>
        </div>
      </div>
      <div>
        <div class="mtb-8">任务测试</div>
        <div>
          <el-button size="small" icon="el-icon-edit">编辑描述</el-button>
          <el-button size="small" icon="el-icon-edit">上传附件</el-button>
          <el-button size="small" icon="el-icon-edit">关联代码仓库</el-button>
          <el-button size="small" icon="el-icon-edit">阻塞关系</el-button>
          <el-button size="small" icon="el-icon-edit">引用资源</el-button>
        </div>
      </div>
      <div v-for="(item, index) in taskInfo" :key="index">
        <div class="mtb-8">任务信息</div>
        <el-descriptions border>
          <el-descriptions-item label="任务描述">{{
            item.desc
          }}</el-descriptions-item>
        </el-descriptions>
      </div>

      <div>
        <div class="mtb-8">活动日志</div>
        <div class="mb-20">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
              <div class="block" v-for="(item, index) in taskInfo" :key="index">
                <el-timeline :reverse="reverse">
                  <el-timeline-item>
                    {{ item.userName }}创建了{{ item.taskName }}的任务——{{
                      new Date(item.createdAt).toLocaleString()
                    }}
                  </el-timeline-item>
                  <el-timeline-item>
                    {{ item.userName }}指派了任务给<span
                      v-for="(received, indexs) in item.receivedData"
                      :key="indexs"
                      >{{ received.userName }}、</span
                    >
                  </el-timeline-item>
                  <el-timeline-item>
                    <span
                      v-for="(received, indexs) in item.receivedData"
                      :key="indexs"
                    >
                      {{ received.userName }}
                      <span v-if="received.completedAt"> 、完成了任务- </span>
                      <!-- {{received.completedAt}} -->
                      <span v-else> 任务还未开始 </span>
                    </span>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-tab-pane>
            <el-tab-pane label="只看日志" name="second">
              <div class="block" v-for="(item, index) in taskInfo" :key="index">
                <el-timeline :reverse="reverse">
                  <el-timeline-item>
                    {{ item.userName }}创建了{{ item.taskName }}的任务——{{
                      new Date(item.createdAt).toLocaleString()
                    }}
                  </el-timeline-item>
                  <el-timeline-item>
                    {{ item.userName }}指派了任务给<span
                      v-for="(received, indexs) in item.receivedData"
                      :key="indexs"
                      >{{ received.userName }}、</span
                    >
                  </el-timeline-item>
                  <el-timeline-item>
                    <span
                      v-for="(received, indexs) in item.receivedData"
                      :key="indexs"
                    >
                      {{ received.userName }}
                      <span v-if="received.completedAt"> 、完成了任务- </span>
                      <!-- {{received.completedAt}} -->
                      <span v-else> 任务还未开始 </span>
                    </span>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-tab-pane>
            <el-tab-pane label="只看评论" name="third">
             <div class="comment-list">
                <div v-for="(comment, index) in commentListData" :key="index" class="border">
                <div>评论ID：{{ comment.commentId }}</div>
                <div>评论内容：{{ comment.commentContent }}</div>
                <div>评论时间：{{ new Date(comment.commentCreatedAt).toLocaleString() }}</div>
                <div>任务ID：{{ comment.taskId }}</div>
                <div>任务名字：{{ comment.taskName }}</div>
                <div>评论用户ID：{{ comment.userId }}</div>
                <div>评论用户名字： {{ comment.username }}</div>
              </div>
             </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 评论区 -->
      <div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="commentContent"
        >
        </el-input>
        <el-button @click="commentBtn">点击评论</el-button>
      </div>
    </div>
    <div class="right" v-for="(item, index) in taskInfo" :key="index">
      <!-- 上 -->
      <div class="shang">
        <div class="pt-18">
          <div class="color">项目</div>
          <div class="pt-8">
            <span class="el-icon-s-opportunity"></span>
            <span>{{ item.taskName }}</span>
          </div>
        </div>
        <div class="pt-18">
          <div class="color">状态</div>
          <div class="pt-8">
            <el-tag>未开始</el-tag>
          </div>
        </div>
        <div class="pt-18">
          <div class="color">处理人</div>
          <div class="pt-8">
            <span class="el-icon-s-help"></span>
            <span>{{ item.userName }}</span>
          </div>
        </div>
        <div class="pt-18">
          <div class="color" style="color: #636f81">所属需求</div>
          <div class="pt-8 scolor">未关联需求</div>
        </div>
        <div class="pt-18">
          <div class="color" style="color: #636f81">迭代</div>
          <div class="pt-8 scolor">为规划进迭代</div>
        </div>
      </div>
      <!-- 中 -->
      <div class="shang">
        <div class="pt-18">
          <div class="color">优先级</div>
          <div class="pt-8">
            {{ item.levelName }}
          </div>
        </div>
        <div class="pt-18">
          <div class="color">截止日期</div>
          <div class="pt-8">
            {{ new Date(item.createdAt).toLocaleString() }}
          </div>
        </div>
        <div class="pt-18">
          <div class="color">标签</div>
          <div class="pt-8">+</div>
        </div>
        <div class="pt-18">
          <div class="color">腾讯会议</div>
          <div class="pt-8">
            <el-button size="small" icon="el-icon-edit">快速会议</el-button>
            <el-button size="small" icon="el-icon-edit">预定会议</el-button>
          </div>
        </div>
      </div>
      <!-- 下 -->
      <div class="xia">
        <div class="pt-18">
          <span>{{ item.userName }}</span>
          <span>创建于</span>
          <span>{{ new Date(item.createdAt).toLocaleString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { taskDetailsApi, commentListApi, createCommentApi,getUesrInfoApi } from "@/api/api";
export default {
  data() {
    return {
      taskInfo: [],
      reverse: false,
      activities: [],
      activeName: "first",
      commentListData: [],
      commentContent: "",
    };
  },
  async created() {
    let [commentList, taskDetails] = await Promise.all([
      commentListApi({ pagination:false}),
      taskDetailsApi({ taskId: this.$route.query.id }),
    ]);
    this.taskInfo.push(taskDetails.data.data);
    this.commentListData = commentList.data.data.rows;
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async commentBtn(){
      let userInfo =await getUesrInfoApi();
        let comment = await createCommentApi({
          commentContent:this.commentContent,
          taskId:Number(this.$route.query.id),
          userId:userInfo.data.data.id
        })
        console.log(comment);
    }
  },
};
</script>
<style scoped lang='scss'>
.task {
  background: #ffffff;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  padding: 0 20px;
  & .left {
    // border: 1px solid red;
    & .edit {
      padding: 0 10px;
      display: grid;
      grid-template-columns: repeat(17, 50px);
    }
    & .comment-list{
      max-height: 295px;
      overflow: hidden;
      overflow-y: scroll;
    }
      ::-webkit-scrollbar{
        height: 0;
        width: 0;
      }
  }
  & .right {
    padding-left: 15px;
    background: #fcfcfd;
    & .shang {
      border-bottom: 1px solid #6f6fef;
      padding: 0 0 15px;
    }
  }
}
// f6f6f7
.pt-18 {
  padding-top: 10px;
}
.pt-8 {
  padding-top: 8px;
}
.color {
  color: #9fa7b2;
  font-size: 14px;
}
.scolor {
  color: #ccd1da;
}
</style>