<template>
  <div class="comment-panel" ref="panel">
    <div class="avatar-wrap">
      <el-avatar>{{ form.name[0] }}</el-avatar>
    </div>
    <div class="editor-wrap">
      <!-- 评论表单区域 -->
      <div class="form-wrap">
        <el-form :model="form">
          <!-- 第一行——昵称、邮箱 -->
          <el-row type="flex" justify="space-between" :gutter="40">
            <el-col>
              <el-form-item>
                <el-input
                  v-model="form.name"
                  prefix-icon="el-icon-user"
                  placeholder="您的昵称"
                  clearable
                  size="small"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item>
                <el-input
                  v-model="form.email"
                  prefix-icon="el-icon-user"
                  placeholder="您的邮箱"
                  clearable
                  size="small"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 若是回复，则显示 -->
          <div class="reply-name" v-if="isReply">
            <span class="">@{{ form.replyName }}</span>
            <i class="iconfont el-icon-close" @click="clearPanel"></i>
          </div>
          <!-- 第二行——评论区 -->
          <el-form-item>
            <el-input
              type="textarea"
              v-model="form.comment"
              placeholder="请说点什么吧~"
              :autosize="{ minRows: 4 }"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" size="small"
              >发表评论</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { submitComment } from "network/detail";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        comment: "",
        replyName: "",
        replyId: "",
      },
      articleId: this.$route.params.id,
      isReply: false,
    };
  },
  mounted() {
    console.log(this.$refs);
    this.$EventBus.$on("replyComment", (res) => {
      this.isReply = true;
      this.form.replyName = res[0];
      this.form.replyId = res[1];
      console.log(this.form);
      // 滚动到指定位置
      this.scrollToPanel();
    });
  },
  destroyed() {
    this.$EventBus.$off();
  },
  methods: {
    // 发表评论
    onSubmit() {
      submitComment(this.articleId, this.form).then((res) => {
        console.log(res);
        const commentCount = res.articleCommentCount;
        this.clearPanel();
        this.$EventBus.$emit("commented", commentCount);
      });
    },
    // 滚动到评论面板
    scrollToPanel() {
      window.scrollTo({
        top:
          this.$refs.panel.getBoundingClientRect().top + window.scrollY - 110,
        behavior: "smooth",
      });
    },
    // 发表评论后自动清空评论面板
    // 关闭回复后自动清空
    clearPanel() {
      this.isReply = false;
      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>

<style scoped>
.comment-panel {
  display: flex;
  border-bottom: 1px solid #eee;
}

.avatar-wrap {
  margin-right: 2rem;
}

.reply-name {
  background-color: #0084ff;
  color: #fff;
  display: inline-block;
  border-radius: 1.5rem;
  padding: 0 0.714rem;
  height: 1.714rem;
  line-height: 1.714rem;
  margin-bottom: 0.8rem;
}

.reply-name .iconfont {
  margin-left: 0.714rem;
  font-size: 0.857rem;
  cursor: pointer;
}
</style>
