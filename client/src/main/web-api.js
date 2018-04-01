import axios from 'axios'

export default {
  baseUrl: '/api/auth',
  async login(username, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/login`, {
        username,
        password,
      })
      return response
    } catch (error) {
      return error
    }
  },

  async logout(username, password) {
    const response = await axios.post(`${this.baseUrl}/logout`)
    return response
  },

  async register(username, email, password) {
    const response = await axios.post(`${this.baseUrl}/register`, {
      username,
      email,
      password,
    })
    return response
  }
}
