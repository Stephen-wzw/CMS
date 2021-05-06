<template>
  <div class="comment-wrap">
    <div class="left">
      <div class="comment-top">
        <span v-if="count === 0">暂无评论</span>
        <span v-else>
          <span style="margin: 0 1px;">{{ count }}</span>
          条评论
        </span>
      </div>
      <comment-panel />
      <comment-list/>
    </div>
    <div class="right hidden"></div>
  </div>
</template>

<script>
import CommentPanel from "./comment/CommentPanel";
import CommentList from "./comment/CommentList";

export default {
  components: {
    CommentPanel,
    CommentList,
  },
  props: {
    count: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.comment-wrap {
  display: flex;
  justify-content: center;

  margin: 2rem 0;
  width: 100%;
}

.left {
  width: 60%;
  background-color: #fff;
  padding: 0 2rem 0 2rem;
  border-radius: 0.5rem;
}

.right {
  width: 23rem;
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

.comment-top {
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
</style>
