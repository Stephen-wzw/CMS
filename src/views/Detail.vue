<template>
  <div class="detail">
    <nav-bar />
    <div class="content">
      <mark-down :data="articleContent" />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import MarkDown from "components/detail/markdown/MarkDown";
import FooterBar from "components/common/FooterBar";

import { getArticleById } from "network/detail";

export default {
  components: {
    NavBar,
    MarkDown,
    FooterBar,
  },
  data() {
    return {
      article: [],
      articleContent: ""
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      const articleId = this.$route.params.id;
      getArticleById(articleId).then((res) => {
        this.article = res;
        this.articleContent = res.articleContent;
        console.log(this.article);
      });
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
</style>
