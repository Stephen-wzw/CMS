<template>
  <ul class="category-list clear-fix">
    <li v-for="(item, index) in category" :key="index">
      <a :class="{ active: isActive == index }" @click="itemClick(index, item)">
        <img :src="item.categoryPhoto" alt="" />
        <span>{{ item.categoryName }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    itemClick(index, item) {
      this.isActive = index;
      this.$emit("categoryClick", item.categoryId);
    },
  },
};
</script>

<style scoped>
.category-list {
  margin: 6.286rem 0 0 3rem;
  width: 17.143rem;
  position: fixed;
}

@media (max-width: 840px) {
  .category-list {
    display: none;
  }
}

.category-list li a {
  padding-left: 2.86rem;
  font-size: 1.07rem;
  height: 3.86rem;
  /* position: relative; */
  display: flex;
  align-items: center;
  color: #4f6174;
  font-weight: 500;
  margin-bottom: 0.2rem;
  border-radius: 0.5rem 0 0 0.5rem;
  transition: background 0.3s;
}

.category-list li a.active,
.category-list li a:hover {
  background: #fff;
  /* box-shadow: 0 0.43rem 0.714rem 0px rgba(234, 234, 234, 0.2); */
}

.category-list li a.active img,
.category-list li a.active span,
.category-list li a:hover img,
.category-list li a:hover span {
  transform: translateX(-0.5rem);
}

.category-list li a.active img,
.category-list li a:hover img {
  filter: grayscale(0);
}

.category-list li a img {
  max-width: 1.79rem;
  max-height: 1.79rem;
  filter: grayscale(1);
  transition: all 0.3s;
}

.category-list li a span {
  padding-left: 0.5rem;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  transition: transform 0.3s;
}
</style>
