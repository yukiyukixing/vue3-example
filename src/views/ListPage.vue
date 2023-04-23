<template>
    <div>
      <h1>列表页</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="{ name: 'DetailsPage', params: { id: item.id } }">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, title: '项目1' },
          { id: 2, title: '项目2' },
          { id: 3, title: '项目3' }
        ]
      }
    }
  }
  </script>
  