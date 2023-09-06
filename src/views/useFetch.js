import { reactive, toRefs } from 'vue'

export default function useFetch(url) {
  const state = reactive({
    data: null,
    loading: true,
    error: null
  })

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      return response.json ()
    })
    .then(data => {
      state.data = data
      state.loading = false
    })
    .catch(error => {
      state.error = error
      state.loading = false
    })

  return toRefs(state)
}
