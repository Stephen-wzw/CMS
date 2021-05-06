<template>
  <div class="message">
    <nav-bar />
    <div class="content">
      <message-list :count="message.length" :message="message" />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import MessageList from "components/message/MessageList";
import FooterBar from "components/common/FooterBar";

import { getAllMessage } from "network/message";

export default {
  components: {
    NavBar,
    // MessagePanel,
    MessageList,
    FooterBar,
  },
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    this.getAllMessage();
    this.$EventBus.$on("messaged", () => {
      this.getAllMessage();
    })
  },
  destroyed() {
    this.$EventBus.$off();
  },
  methods: {
    getAllMessage() {
      getAllMessage().then((res) => {
        this.message = res;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.message {
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
