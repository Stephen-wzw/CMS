<template>
  <div class="right-wrap">
    <blog-info></blog-info>
  </div>
</template>

<script>
import BlogInfo from "./BlogInfo";

export default {
  components: {
    BlogInfo,
  },
};
</script>

<style scoped>
.right-wrap {
  margin: 6.286rem 2rem 0 2rem;
  width: 23rem;
}

@media (max-width: 1160px) {
  .right-wrap {
    display: none;
  }
}
</style>
