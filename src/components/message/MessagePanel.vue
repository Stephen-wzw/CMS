<template>
  <div class="message-panel">
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
          <!-- 第二行——评论区 -->
          <el-form-item>
            <el-input
              type="textarea"
              v-model="form.message"
              placeholder="请说点什么吧~"
              :autosize="{ minRows: 4 }"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" size="small"
              >发表留言</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { submitMessage } from "network/message";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      articleId: this.$route.params.id,
    };
  },
  methods: {
    // 发布留言
    onSubmit() {
      submitMessage(this.form).then((res) => {
        console.log(res);
        this.clearPanel();
        this.$EventBus.$emit("messaged");
      });
    },
    // 发表回复后自动清空回复面板
    clearPanel() {
      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>

<style scoped>
.message-panel {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 0 2rem;
}

.avatar-wrap {
  margin-right: 2rem;
}
</style>
