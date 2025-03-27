export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase
  
  const apiFetch = $fetch.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    onRequest({ options }) {
      const token = localStorage.getItem('token')
      if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
      }
    }
  })
  
  return {
    apiFetch
  }
}
