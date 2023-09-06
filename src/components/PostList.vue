<template>
  <div>
    <h1>Lista de Posts</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in posts" :key="post.id" id="lista">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import './PostStyle.css';  //Importar estilos


export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    },
  },
};
</script>
