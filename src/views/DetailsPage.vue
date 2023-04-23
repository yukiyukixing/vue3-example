<template>
    <div>
      <h1>详情页</h1>
      <p>项目ID: {{ id }}</p>
      <router-link to="/">返回列表页</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    }
  }
  </script>
  