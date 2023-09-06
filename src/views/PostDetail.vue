<template>
  <div>
    <h2>Detalles del Post</h2>
    <div v-if="localPost">
      <h3>{{ localPost.title }}</h3>
      <p>{{ localPost.body }}</p>
    </div>
    <router-link to="/posts">Volver a la lista de posts</router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      localPost: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
        this.localPost = await response.json();
      } catch (error) {
        console.error('Error al obtener los detalles del post:', error);
      }
    },
  },
};
</script>
