import axios from 'axios'

export default {
  baseUrl: (userId, gameId) => `/api/users/${userId}/games/${gameId}`,
  async getGameGameOverview(userId, gameId) {
    const response = await axios.get(this.baseUrl(userId, gameId))
    return response
  },
  async getCoins(userId, gameId) {
    const response = await axios.get(`${this.baseUrl(userId, gameId)}/coins`)
    return response
  }
}
