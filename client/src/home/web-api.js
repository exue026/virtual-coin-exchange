import axios from 'axios'

export default {
  baseUrl: '/api/users',
  async getGamesForUser(userId) {
    try {
      const response = await axios.get(`${this.baseUrl}/${userId}/games`)
      return response
    } catch (error) {
      throw error
    }
  },
  async createGame(newGame, userId) {
    return await axios.post(`${this.baseUrl}/${userId}/games`, newGame)
  },
}
