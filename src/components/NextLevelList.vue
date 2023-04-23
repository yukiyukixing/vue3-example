<template>
  <div class="list">
    <!-- <h2>新列表页</h2> -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <router-link :to="`/details/${item.id}`">查看详情222</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: 'New Item 1' },
        { id: 2, title: 'New Item 2' },
        { id: 3, title: 'New Item 3' }
      ]
    }
  }
}
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
}
</style>
  