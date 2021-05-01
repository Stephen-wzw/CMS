<template>
  <div class="article-item">
    <div class="title">
      <a @click="toArticle(articleItem.articleId)">
        {{ articleItem.articleTitle }}
      </a>
    </div>
    <div class="time">
      {{ articleItem.articleCreateTime }}
    </div>
    <div class="content">
      {{ articleItem.articleContent }}
    </div>
    <div class="info">
      <div v-for="(item, index) in info" :key="index" class="box">
        <i :class="item.icon"></i>
        <span>{{ articleItem[item.name] }}</span>
      </div>
    </div>
    <div class="line-dashed"></div>
  </div>
</template>

<script>
//  import { formatDate } from "@/common/utils"

export default {
  props: {
    articleItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      info: [
        {
          icon: "el-icon-chat-round",
          name: "articleCommentCount",
        },
        {
          icon: "el-icon-view",
          name: "articleViewCount"
        },
        {
          icon: "el-icon-star-off",
          name: "articleLikeCount"
        },
      ],
    };
  },
  methods: {
    toArticle(articleId) {
      this.$router.push({path: `/article/${articleId}`}).catch(err => err)
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  margin: 1rem 0 0.5rem 0;
}

.content {
  font-size: 1rem;
  line-height: 22px;
  margin: 1rem 0 0.5rem 0;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.info {
  display: flex;
}

.info .box {
  width: 2rem;
  background-color: #fff;
}
</style>
