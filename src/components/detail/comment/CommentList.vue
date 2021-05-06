<template>
  <div class="comment-list">
    <comment-item
      v-for="(item, index) in commentList"
      :key="index"
      :commentItem="item"
    />
  </div>
</template>

<script>
import CommentItem from "./CommentItem";

import { getAllComment } from "network/detail";

export default {
  components: {
    CommentItem,
  },
  data() {
    return {
      commentList: [],
      articleId: this.$route.params.id,
    };
  },
  mounted() {
    this.getAllComment();
    console.log("评论列表被挂载");
    this.$EventBus.$on("commented", () => {
      this.getAllComment();
    })
  },
  destroyed() {
    this.$EventBus.$off();
  },
  methods: {
    getAllComment() {
      getAllComment(this.articleId).then((res) => {
        this.commentList = res;
        console.log(this.commentList);
      });
    },
  },
};
</script>

<style scoped></style>
