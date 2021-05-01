<template>
  <div class="article-list">
    <search-bar />
    <article-item
      v-for="(item, index) in article"
      :key="index"
      :articleItem="item"
    />
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import SearchBar from "./SearchBar";

export default {
  components: {
    ArticleItem,
    SearchBar,
  },
  props: {
    article: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.article-list {
  width: 50%;
  min-height: calc(100vh - 10.572rem);

  background-color: #fff;

  padding: 1rem 2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 6.286rem 0 0 20.143rem;
}

@media (max-width: 1160px) {
  .article-list {
    width: 90%;
    margin: 6.286rem 3rem 0 20.143rem;
  }
}

@media (max-width: 840px) {
  .article-list {
    margin: 6.286rem auto 0;
  }
}
</style>
