<template>
  <div class="home">
    <ul class="list">
      <li><a @click="articleClick">文章</a></li>
      <li><a @click="messageClick">留言</a></li>
      <li><a @click="aboutClick">关于</a></li>
    </ul>
  </div>
</template>

<script>
export default {
 methods: {
   articleClick() {
     this.$router.push("/article").catch(err => err);
   },
      messageClick() {
     this.$router.push("/message").catch(err => err);
   },
      aboutClick() {
     this.$router.push("/about").catch(err => err);
   }
 }
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url(../assets/img/home.png) no-repeat 100% 100%;
  background-size: cover;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
}

ul li {
  padding: 2rem;
}

ul li a {
  color:#fff;
  font-size: 1.5rem;
}

ul li a:hover {
  color: #e7e1dd;
}
</style>
