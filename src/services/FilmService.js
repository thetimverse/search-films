import { api } from '@/services/api.js'

export default {
  search (title) {
    return api('/movies/search?title=' + title, {
      method: 'GET' // get est par défaut donc on a pas besoin de le mettre
    })
  }
}
