<template>
  <div class="breadcrumb">
    <span>当前位置：</span>
    <router-link to="/">首页</router-link>
    <span v-if="showDetails"> > </span>
    <router-link v-if="showDetails" :to="`/details/${id}`">详情页 - {{ id }}</router-link>
    <span v-if="showNestedList"> > </span>
    <router-link v-if="showNestedList" :to="`/details/${id}/list`">下一级列表</router-link>
    <span v-if="showNextLevelList"> > </span>
    <router-link v-if="showNextLevelList" :to="`/details/${id}/list/newList`">下一级列表详情</router-link>
  </div>
</template>
<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    showDetails() {
      return this.$route.path.includes('/details/');
    },
    showNestedList() {
      return this.$route.path.includes('/details/') && this.$route.path.includes('/list');
    },
    showNextLevelList() {
      return this.$route.path.includes('/details/') && this.$route.path.includes('/newList');
    }
  }
}
</script>
<style scoped>
.breadcrumb {
  font-size: 14px;
  margin-bottom: 10px;
}
</style>  