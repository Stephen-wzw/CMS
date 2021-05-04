<template>
  <div class="article">
    <nav-bar />
    <div class="content">
      <category-list :category="category" @categoryClick="categoryClick" />
      <article-list :article="article" />
      <right-wrap />
    </div>
    <el-backtop>Up</el-backtop>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import ArticleList from "components/article/post/ArticleList";
import FooterBar from "components/common/FooterBar";
import CategoryList from "components/article/category/CategoryList";
import RightWrap from "components/article/widgets/index";

import {
  getAllArticle,
  getCategory,
  getArticleByCate,
  getArticleByTitle,
  getArticleByContent,
} from "network/article";

export default {
  components: {
    NavBar,
    ArticleList,
    FooterBar,
    CategoryList,
    RightWrap,
  },
  data() {
    return {
      article: [],
      category: [
        {
          categoryId: 0,
          categoryPhoto: "",
          categoryName: "全部分类",
        },
      ],
    };
  },
  created() {
    this.getAllArticle();
    this.getCategory();
  },
  methods: {
    // 获取所有文章
    getAllArticle() {
      getAllArticle().then((res) => {
        this.article = res;
      });
    },

    // 获取分类
    getCategory() {
      getCategory().then((res) => {
        this.category.push(...res);
      });
    },

    // 分类切换时获取对应文章
    categoryClick(categoryId) {
      if (categoryId) {
        getArticleByCate(categoryId).then((res) => {
          this.article = res;
        });
      } else {
        this.getAllArticle();
      }
    },
  },
  mounted() {
    this.$EventBus.$on("searchClick", (filterValue, filterType) => {
      switch (filterType) {
        case "title":
          getArticleByTitle(filterValue).then((res) => {
            this.article = res
          });
          break;
        case "content":
          getArticleByContent(filterValue).then((res) => {
            this.article = res
          });
          break;
      }
    });
  },
  destroyed() {
    this.$EventBus.$off();
  },
};
</script>

<style scoped>
.article {
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: #f3f3f4;
}

.content {
  display: flex;
}
</style>
