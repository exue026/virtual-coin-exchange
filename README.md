# Virtual Coin Exchange

## Prerequisites

* Ensure you are using Node `6.10.0` and npm `3.10.10`.
* Have yarn installed on your system: `yarn -v` outputs `1.5.1`.
* Install and run MongoDB locally

## Setup

```
$ ./scripts/dev_install.sh
```

## Run

To start up the frontend and server concurrently, do

```
$ yarn dev
```

## Production

To do a one-time build of frontend & backend, execute

```
$ ./scripts/build.sh
```

Remember to commit the changes before pushing to `Heroku`

## Additional Info

Check out the [client](https://github.com/exue026/virtual-coin-exchange/tree/master/client) and [server](https://github.com/exue026/virtual-coin-exchange/tree/master/server) for more specific information.
