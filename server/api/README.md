# Routes

## Coins

* Get all coins to display
  * `GET /api/coins`
  * cryptocompare -> toplists -> toplist by total volume
* Get specific information of a single coin
  * `GET /api/coins/:coinId`
  * cryptocompare -> price -> multiple symbols full data
  * cryptocompare -> historical data -> daily OHLCV
    * We want limit = 24, aggregate = 7
    * Data for a coin at the end of every week, for the last 24 weeks (half a year)
* Purchase a single coin
  * `PUT /api/coins/:coinId`
  * Request body: `userId, gameId, userCoinsId, numPurchased`
* Sell a single coin
  * `POST /api/coins/:coinId`
  * Request body: `userId, gameId, userCoinsId, numSold`

## Users

* Get all games
  * `GET /api/users/:userId/games`
* Get basic info for the user in a game
  * `GET /api/users/:userId/games/:gameId`
  * List of coins purchased, total net worth, etc.
* Create game
  * `PUT /api/users/:userId/games`
* Delete game as admin
  * `DELETE /api/users/:userId/games/:gameId`
* Update game settings
  * `POST /api/users/:userId/games`

## Games

* Get list of players and rankings
    * `GET /api/games/:gameId/rankings`
* Get basic info of a game
    * `GET /api/games/:gameId`
