<template>
  <div class="message-item">
    <div class="header">
      <el-avatar>{{ messageItem.messageUserName[0] }}</el-avatar>
      <div class="message-info">
        <div class="left">
          <span class="message">{{ messageItem.messageUserName }}</span>
        </div>
        <div class="right">
          <span class="floor">#{{ floor + 1 }}楼</span>
          <span class="time">{{ messageTime }}</span>
        </div>
      </div>
    </div>
    <div class="body">
      {{ messageItem.messageContent }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    messageItem: {
      type: Object,
      default() {
        return {};
      },
    },
    floor: {
      type: Number,
    }
  },
  computed: {
    messageTime() {
      return moment(this.messageItem.messageCreationTime).format("lll");
    },
  },
};
</script>

<style scoped>
.message-item {
  border-bottom: 1px dashed #eee;
  padding: 1.5rem 2rem;
}

.header {
  display: flex;
  position: relative;
}

.message-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.message-info .left {
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 1rem;
  color: #f18673;
}

.message-info .right {
  display: flex;
}

.message-info .right .floor {
  font-size: 0.86rem;
  color: #f18673;
  margin-right: 0.86rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: capitalize;
}

.message-info .right .reply:hover {
  font-weight: bold;
}

.message-info .right .time {
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
</style>
