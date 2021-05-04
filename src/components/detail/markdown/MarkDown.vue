<template>
  <div class="mark-down">
    <div class="left">
      <div class="article-title">
        <h1>{{ article.articleTitle }}</h1>
      </div>
      <div class="article-info">
        <span>阅读 {{ article.articleViewCount }}</span>
        <span class="split-line"> | </span>
        <span>点赞 {{ article.articleLikeCount  }}</span>
        <span class="split-line"> | </span>
        <span>发布于 {{ articleCreateTime }}</span>
      </div>
      <div class="hidden-anchor"></div>
      <div class="article-detail" v-html="articleDetail.content"></div>
      <div class="end-wrap">
        <span>【END】</span>
      </div>
    </div>
    <div class="right">
      <div class="widget-container category">
        <div class="widget-header">
          分类
        </div>
        <div class="widget-body">
          <img :src="article.category.categoryPhoto" />
          <span>{{ article.category.categoryName }}</span>
        </div>
      </div>
      <div class="widget-container toc">
        <div class="widget-header">
          目录
        </div>
        <div class="anchor widget-body" v-html="articleDetail.toc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import markdown from "@/plugins/markdown";

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      articleDetail: {
        toc: "",
        content: "",
      },
    };
  },
  computed: {
    articleCreateTime() {
      return moment(this.article.publishTime).format('YYYY-MM-DD')
    }
  },
  methods: {
    renderMarkdown() {
      const articleContent = this.article.articleContent;
      const marked = markdown.marked(articleContent);
      this.articleDetail.content = marked.content;
      this.articleDetail.toc = marked.toc;
    },
  },
  watch: {
    article: function() {
      this.renderMarkdown();
    },
  },
};
</script>

<style scoped>
.mark-down {
  display: flex;
  justify-content: center;

  margin-top: 6.286rem;
  width: 100%;
  min-height: calc(100vh - 10.572rem);
}

.left {
  width: 60%;
  background-color: #fff;
  padding: 0 2rem 0 2rem;
  border-radius: 0.5rem;
  /* display: flex; */
}

.article-title {
  margin-bottom: 2rem;
}

.article-info {
  margin-bottom: 3rem;
  color: #969696;
}

.article-info .split-line {
  position: relative;
  top: -1px;
  color: #aaa;
}

.hidden-anchor {
  position: relative;
  top: -4.286rem;
  height: 0;
}

.end-wrap {
  position: relative;
  border-top: 1px solid #ddd;
  margin: 3rem 0 3rem;
}

.end-wrap span {
  position: absolute;
  left: 50%;
  top: -12px;
  transform: translate(-50%, 0);
  display: block;
  background: #fff;
  font-weight: 500;
  user-select: none;
}

.right {
  width: 23rem;
  border-radius: 0.5rem;
}

@media (max-width: 890px) {
  .right {
    display: none;
  }
}

@media (max-width: 890px) {
  .left {
    width: 80%;
  }
}

.widget-container {
  margin-left: 2rem;
}

.category {
  height: 10rem !important;
}

.category>.widget-body {
  height: 100%;
  display: flex;
  justify-content: center;
}

/* 吸顶效果 */
.toc {
  position: sticky;
  top: 5rem;
}
</style>
