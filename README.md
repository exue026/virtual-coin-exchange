# Virtual Coin Exchange

## Prerequisites

* Ensure you are using Node `6.10.0` and npm `3.10.10`
* Have yarn installed on your system (`yarn -v` outputs `1.9.4`)
* Install and run MongoDB locally

## Setup

```
$ ./scripts/install.sh
```

## Run

Install MongoDB locally if you don't already have it. Once you have it installed, run

```
sudo ~/mongodb/bin/mongod
```

to start it locally.

To start up the frontend and server concurrently, run

```
$ yarn dev
```

then go to [http://localhost:3000](http://localhost:3000]) to view the app.

## Production

To do a one-time build of the frontend + backend, execute

```
$ ./scripts/build.sh
```

Remember to commit the changes before pushing to `Heroku`

## Additional Info

Check out the [client](https://github.com/exue026/virtual-coin-exchange/tree/master/client) and [server](https://github.com/exue026/virtual-coin-exchange/tree/master/server) for more specific information.
