# Routes

## Coins

* Get all coins in the db
  * `GET /api/coins`
* Get specific information of a single coin
  * `GET /api/coins/:coinId`
* Purchase a single coin
  * `PUT /api/coins/:coinId`
  * Request body: `userId, gameId, userCoinsId, numPurchased`
* Sell a single coin
  * `POST /api/coins/:coinId`
  * Request body: `userId, gameId, userCoinsId, numSold`

## Users

* Get all games
  * `GET /api/users/:userId/games`
* Get basic info of a specific game
  * `GET /api/users/:userId/games/:gameId`
* Create game
  * `PUT /api/users/:userId/games`
* Delete game as admin
  * `DELETE /api/users/:userId/games/:gameId`
* Update game settings
  * `POST /api/users/:userId/games`
* Get all coins for a specific game
  * `GET /api/users/:userId/games/:gameId/coins`
  * This route works hand in hand with  `GET /api/coins/:coinId`
