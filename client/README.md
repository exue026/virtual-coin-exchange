# Client

This is the frontend repo of Virtual Coin Exchange.

## Installation

***Make sure you have NodeJS `6.10.0` (npm `3.10.10`).***

We use Yarn for dependency management. You can find the instructions to install it [here](https://yarnpkg.com/lang/en/docs/install/). Make sure you had the `--without-node` parameter so that you don't install another copy of Nodejs. We are using Yarn version `1.5.1`.

After you have Node, npm, and Yarn setup, execute `yarn` while in this directory to install frontend dependencies. Also, run `npm install -g concurrently` to install the concurrently module globally.

You should be good to go. Execute

```
yarn start
```

To spin up a webpack dev server.

## Styling

Create Sass files as stylesheets, but use the .css extension when importing them in JavaScript. This is because the Sass file is compiled into a CSS file at runtime, which is what ends up being used.

## Importing modules

All JavaScript and CSS files as well as images can be imported. When importing a file, you may use a relative path or an absolute path (which is relative to `src/`).

## Testing

To run all tests, do `yarn test` in the directory root. Or, to run tests in a certain directory only, do `yarn test <path-to-directory>`.

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
