<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>

    <div v-else>
      <div v-for="user in data" :key="user.id">
        <h3>{{ user.id }}</h3>
        <p>{{ user.name }}</p>

        <!-- Botón "Ver detalles" que redirige a la página de detalles del usuario -->
        <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">
          <button>Ver detalles</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from './useFetch'

export default {
  setup() {
    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/users/')
    
    return { data, loading, error }
  }
}
</script>
