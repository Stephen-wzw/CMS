<template>
  <div class="nav-bar">
    <div class="logo">
      <i class="el-icon-lollipop"></i>
      <a href="javascript:void(0)" @click="homeClick">Blog</a>
    </div>
    <div class="menu">
      <a href="javascript:void(0)" @click="homeClick">首页</a>
      <a href="javascript:void(0)" @click="articleClick">文章</a>
      <a href="javascript:void(0)" @click="messageClick">留言</a>
      <a href="javascript:void(0)" @click="aboutClick">关于</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    homeClick() {
      console.log("home");
      this.$router.push("/").catch((err) => err);
    },
    articleClick() {
      console.log("article");
      this.$router.push("/article").catch((err) => err);
    },
    messageClick() {
      this.$router.push("/message").catch((err) => err)
    },
    aboutClick() {
      console.log("about");
      this.$router.push("/about").catch((err) => err);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  box-sizing: border-box;
  height: 4.286rem;
  line-height: 4.286rem;
  border-bottom: 1px solid #dbdee0;
  box-shadow: 0 0.43rem 0.714rem 0px rgba(234, 234, 234, 0.3);

  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: #fff;
  color: #303133;
  font-size: 1.2rem;
  padding: 0 1rem;
}

.logo a {
  margin-left: 0.357rem;
}

.menu {
  margin-right: 2rem;
}

.menu a {
  margin-left: 2.5rem;
}
</style>
