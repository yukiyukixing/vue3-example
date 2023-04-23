<template>
  <div>
    <!-- <h2>详情页 - {{ id }}</h2> -->
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{{ id }}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{ title }}</td>
        </tr>
        <tr>
          <th>操作</th>
          <td>
            <router-link :to="`/details/${id}/list`">进入下一级列表</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Item Title"
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  width: 100px;
}
</style>
