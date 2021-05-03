<template>
  <div class="mark-down">
    <div class="hidden-anchor"></div>
    <div class="article-detail" v-html="articleDetail.content"></div>
    <div class="anchor" v-html="articleDetail.toc"></div>
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
  width: 70%;
  min-height: calc(100vh - 10.572rem);

  background-color: #fff;
  margin-top: 6.286rem;
  padding: 0 2rem 0 2rem;
  border-radius: 0.5rem;
  display: flex;
}

.hidden-anchor {
  position: relative;
  top: -4.286rem;
  height: 0;
}
</style>
