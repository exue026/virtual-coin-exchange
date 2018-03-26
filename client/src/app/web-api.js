import axios from 'axios'

export default {
  async login(username, password) {
    const response = await axios.post('/api/auth/login', {
      username: 'theanswer',
      password: 'qwe123'
    })
    return response
  },

  async logout(username, password) {
    const response = await axios.post('/api/auth/logout')
    return response
  }
}
