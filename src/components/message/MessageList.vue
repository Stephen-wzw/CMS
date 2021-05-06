<template>
  <div class="message-list">
    <div class="message-top">
      <span v-if="count === 0">暂无留言</span>
      <span v-else>
        <span style="margin: 0 1px;">{{ count }}</span>
        条留言
      </span>
    </div>
    <message-panel />
    <message-item
      v-for="(item, index) in message"
      :key="index"
      :messageItem="item"
      :floor="index"
    />
  </div>
</template>

<script>
import MessagePanel from "components/message/MessagePanel";
import MessageItem from "./MessageItem";

export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
    message: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    MessagePanel,
    MessageItem,
  },
};
</script>

<style scoped>
.message-list {
  margin-top: 6.286rem;
  width: 70%;
  min-height: calc(100vh - 10.572rem);

  background-color: #fff;
  border-radius: 0.5rem;
}

@media (max-width: 1160px) {
  .message-list {
    width: 90%;
  }
}

@media (max-width: 840px) {
  .message-list {
    margin: 6.286rem auto 0;
  }
}

.message-top {
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding: 0 2rem 0 2rem;
}
</style>
