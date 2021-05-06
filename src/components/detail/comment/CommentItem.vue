<template>
  <div class="comment-item">
    {{ commentItem }}
  </div>
</template>

<script>
export default {
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped></style>
