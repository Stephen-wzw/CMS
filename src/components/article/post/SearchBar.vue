<template>
  <div class="search-bar">
    <el-input
      :placeholder="placeholder"
      v-model="filterValue"
      class="input-with-select"
    >
      <el-select
        v-model="filterType"
        class="select"
        style="width: 10rem;"
        slot="prepend"
        placeholder="标题"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="btnClick(filterValue, filterType)"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterValue: "",
      filterType: "title",
      options: [
        {
          value: "title",
          label: "标题",
        },
        {
          value: "content",
          label: "全文",
        },
      ],
    };
  },
  computed: {
    placeholder() {
      let placeholder = "";
      switch (this.filterType) {
        case "title":
          placeholder = "标题关键字";
          break;
        case "content":
          placeholder = "全文关键字";
          break;
        default:
          placeholder = "标题关键字";
      }
      return placeholder;
    },
  },
  methods: {
    btnClick(filterValue, filterType) {
      this.$EventBus.$emit("searchClick", filterValue, filterType);
    },
  },
};
</script>

<style scoped>
.input-with-select {
  background-color: #fff;
}
</style>
