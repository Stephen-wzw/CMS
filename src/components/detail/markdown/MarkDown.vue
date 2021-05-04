<template>
  <div class="mark-down">
    <div class="left">
      <div class="hidden-anchor"></div>
      <div class="article-detail" v-html="articleDetail.content"></div>
    </div>
    <div class="right">
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
import markdown from "@/plugins/markdown";

export default {
  props: {
    data: {
      type: String,
      default() {
        return "";
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
  mounted() {
    console.log(this.data);
    // this.renderMarkdown();
  },
  methods: {
    renderMarkdown() {
      const marked = markdown.marked(this.data);
      console.log(marked);
      this.articleDetail.content = marked.content;
      this.articleDetail.toc = marked.toc;
    },
  },
  watch: {
    data: function(data) {
      console.log(data);
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

.hidden-anchor {
  position: relative;
  top: -4.286rem;
  height: 0;
}

.right {
  width: 23rem;
  border-radius: 0.5rem;
}

/* 吸顶效果 */
.toc {
  position: sticky;
  top: 5rem;
  margin-left: 5rem;
}
</style>
