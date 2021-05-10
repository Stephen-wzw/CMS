<template>
  <div class="about">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="about-wrap">
        <h2>技术博客前台管理系统</h2>
        <p class="info">本博客采用Vue.js、Element、axios、Vue-Router、SpringBoot、MySql等技术栈。</p>
        <p class="note">个人分享学习记录、心情日志、技术博客等...</p>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import FooterBar from "components/common/FooterBar";

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style scoped>
.about {
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: #f3f3f4;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.286rem;
  min-height: calc(100vh - 4.286rem);
}

.about-wrap {
  border-radius: 10px;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  padding: 30px;
  top: -50px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

h2 {
  text-align: center;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.info {
  font-size: 16px;
  margin-bottom: 2rem;
  font-weight: 400;
}

.note {
  font-size: 10px;
  float: right;
  color:#999;
}
</style>
