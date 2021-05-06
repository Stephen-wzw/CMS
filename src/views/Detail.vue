<template>
  <div class="detail">
    <nav-bar />
    <div class="content">
      <el-button
        v-if="isLiked"
        class="like"
        icon="el-icon-star-off"
        @click="likeClick"
        circle
      ></el-button>
      <el-button
        v-else
        class="like"
        icon="el-icon-star-on"
        @click="likeClick"
        circle
      ></el-button>
      <mark-down :article="article" />
    </div>
    <comment-part :count="article.articleCommentCount" />
    <el-backtop>Up</el-backtop>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import MarkDown from "components/detail/markdown/MarkDown";
import CommentPart from "components/detail/CommentPart";
import FooterBar from "components/common/FooterBar";

import { getArticleById, likeArticle } from "network/detail";

export default {
  components: {
    NavBar,
    MarkDown,
    CommentPart,
    FooterBar,
  },
  data() {
    return {
      article: {},
      articleId: this.$route.params.id,
      isLiked: false,
    };
  },
  mounted() {
    this.getArticle();
    console.log(this.article);
    this.$EventBus.$on("commented", (commentCount) => {
      this.article.articleCommentCount = commentCount;
    });
  },
  destroyed() {
    this.$EventBus.$off();
  },
  methods: {
    getArticle() {
      getArticleById(this.articleId).then((res) => {
        this.article = res;
        console.log(this.article);
      });
    },
    likeClick() {
      likeArticle(this.articleId).then((res) => {
        this.article.articleLikeCount = res;
        this.isLiked = !this.isLiked;
      });
    },
  },
  watch: {
    article: function() {
      document.title = this.article.articleTitle;
    },
  },
};
</script>

<style scoped>
.detail {
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: #f3f3f4;
}

.content {
  display: flex;
  justify-content: center;
}

.like {
  width: 2.86rem;
  height: 2.86rem;
  font-size: 1.5rem;

  position: fixed;
  top: 20rem;
  left: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
