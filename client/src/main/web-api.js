import axios from 'axios'

export default {
  async login(username, password) {
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      })
      return response
    } catch (error) {
      return error
    }
  },

  async logout(username, password) {
    const response = await axios.post('/api/auth/logout')
    return response
  },

  async register(username, email, password) {
    const response = await axios.post('/api/auth/register', {
      username,
      email,
      password,
    })
    return response
  }
}
