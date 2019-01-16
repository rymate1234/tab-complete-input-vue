# `<tab-complete-input>`

This is a tab completable `<input>` component for Vue.js. It supports fetching data from a fixed array and dynamically via a method and optional formatting of the tabbed words via a method.

The source code is essentially a port of the [tab-complete](https://www.npmjs.com/package/tab-complete) npm package to a vue friendly format, meaning it's a single vue module and removes the jQuery dependency.

### [Demo and docs](https://vue-tab-complete-input.netlify.com/)

## Installing
The package is available from npm as vue-tab-complete-input. To install, simply run

``` bash
npm install vue-tab-complete-input
```

## Build Setup (for contributors)

``` bash
# install dependencies
yarn install

# serves the docs / development environment with hot reload at localhost:8080
yarn dev:docs

# optional netlify functions dev server
yarn dev:lambda 

# build lib for production with minification
npm run build:lib

# Build site
npm run build:docs
```
