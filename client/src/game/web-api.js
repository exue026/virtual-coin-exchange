import axios from 'axios'

export default {
  baseUrl: (userId, gameId) => `/api/users/${userId}/games/${gameId}`,
  async getGameGameOveriew(userId, gameId) {
    const response = await axios.get(this.baseUrl(userId, gameId))
    return response
  },
}
