<template>
  <div class="detail">
    <nav-bar />
    <div class="content">
      <el-button v-if="isLiked" class="like" icon="el-icon-star-off" @click="likeClick" circle></el-button>
      <el-button v-else class="like" icon="el-icon-star-on" @click="likeClick" circle></el-button>
      <mark-down :article="article" />
    </div>
    <el-backtop>Up</el-backtop>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import MarkDown from "components/detail/markdown/MarkDown";
import FooterBar from "components/common/FooterBar";

import { getArticleById, likeArticle } from "network/detail";

export default {
  components: {
    NavBar,
    MarkDown,
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
  },
  methods: {
    getArticle() {
      getArticleById(this.articleId).then((res) => {
        this.article = res;
        console.log(this.article);
      });
    },
    likeClick() {
      likeArticle(this.articleId).then(res => {
        this.article.articleLikeCount = res;
        this.isLiked = !this.isLiked;
      })
    }
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
  left: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
