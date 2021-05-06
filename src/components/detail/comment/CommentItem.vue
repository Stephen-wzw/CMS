<template>
  <div class="comment-item">
    <div class="header">
      <el-avatar>{{ commentItem.commentPersonName[0] }}</el-avatar>
      <div class="comment-info">
        <div class="left">
          <span class="parentComment">{{ commentItem.commentPersonName }}</span>
        </div>
        <div class="right">
          <div class="reply" @click="reply">回复</div>
          <span class="time">{{ commentTime }}</span>
        </div>
      </div>
    </div>
    <div class="body">
      <span class="childComment" v-if="hasChild"
        >@{{ commentItem.respondUser }}</span
      >
      {{ commentItem.commentContent }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    commentTime() {
      return moment(this.commentItem.commentCreationTime).format("lll");
    },
    hasChild() {
      return Boolean(this.commentItem.respondUser);
    },
  },
  methods: {
    reply() {
      console.log(this.commentItem.commentPersonName, this.commentItem.commentId);
      this.$EventBus.$emit(
        "replyComment",
        // 传递两个数据
        [this.commentItem.commentPersonName, this.commentItem.commentId]
      );
    },
  },
};
</script>

<style scoped>
.comment-item {
  border-bottom: 1px dashed #eee;
  padding: 1.5rem 0;
}

.header {
  display: flex;
  position: relative;
}

.comment-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comment-info .left {
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 1rem;
  color: #f18673;
}

.comment-info .right {
  display: flex;
}

.comment-info .right .reply {
  font-size: 0.86rem;
  color: #f18673;
  margin-right: 0.86rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: capitalize;
}

.comment-info .right .reply:hover {
  font-weight: bold;
}

.comment-info .right .time {
  color: #999;
  font-size: 0.86rem;
  letter-spacing: 0;
}

.body {
  color: #303030;
  line-height: 1.2rem;
  padding: 0 0 0 3.65rem;
  white-space: pre-wrap;
}

.body .childComment {
  color: #1890ff;
}
</style>
