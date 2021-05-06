<template>
  <div class="comment-panel">
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
          <el-form-item>
            <el-input
              type="textarea"
              v-model="form.comment"
              placeholder="请说点什么吧~"
              :autosize="{ minRows: 4}"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" size="small">发表评论</el-button>
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
      },
      articleId: this.$route.params.id,
    };
  },
  methods: {
    onSubmit() {
      submitComment(this.articleId, this.form).then((res) => {
        console.log(res);
        const commentCount = res.articleCommentCount;
        for (let key in this.form) {
          this.form[key] = "";
        }
        this.$EventBus.$emit("commented", commentCount);
      });
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
  margin-right: 1.2rem;
}
</style>
