<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>

    <div v-else>
      <div v-if="user">
        <h3>{{ user.id }}</h3>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.password }}</p>
        <p>{{ user.role }}</p>
        <img :src="user.avatar" alt="Avatar" width="100" height="100">
        <!-- Agrega aquí cualquier otro campo que desees mostrar -->
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from './useFetch'

export default {
  props: ['id'], // Recibe el ID del usuario como prop desde la ruta
  setup(props) {
    const { data: user, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/users/${props.id}`)

    if (error) {
      console.error('Error en la solicitud:', error)
      // Manejar el error aquí
    }

    return { user, loading, error }
  }
}
</script>
