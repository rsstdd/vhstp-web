# SHT-WEB ★★

SAAS Web Application.

## Table of contents
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Running it with webpack dashboard](#user-content-running-it-with-webpack-dashboard)
* [Build client (production)](#user-content-build-client-production)
* [Running client in preview production mode](#user-content-running-client-in-preview-production-mode)
* [Universal dev mode](#user-content-universal-dev-mode)
* [Universal build (production)](#user-content-universal-build-production)
* [Removing server rendering related stuff](#user-content-removing-server-rendering-related-stuff)
* [Linting](#user-content-linting)
* [Git hooks](#user-content-git-hooks)
* [Misc](#user-content-misc)
* [Changelog](#user-content-changelog)

## Setup

Tested with node 7.x and 8.x

```
$ npm install
```

## npm tasks

* `start` - starts client app only in development mode, using webpack dev server
* `client:dev` - same as `start` plus fancy webpack dashboard
* `client:watch` - not to be used on it's own, starts webpack with client config in watch mode
* `client:build` - builds client application
* `client:preview` - runs client application in *production* mode, using webpack dev server (use for local testing of the client production build)
* `server:watch` - not to be used on it's own, starts webpack with server config in watch mode
* `server:restart` - not to be used on it's own, server build run using `nodemon`
* `server:build` - not to be used on it's own, builds server application
* `server:dev` - starts server app only in development mode (use for testing server responses)
* `universal:dev` - runs both server and client in watch mode, automatically restarts server on changes
* `universal:build` - builds both server and client

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run client:dev
```

**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build client (production)

Build will be placed in the `build` folder.

```
$ npm run client:build
```

## Running client in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run client:preview
```

## Universal dev mode

```
npm run universal:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.

## Universal build (production)

```
npm run universal:build
```

copy `package.json` and `build` folder to your production server

install only production dependencies and run server

```
npm install --production

node ./build/server.js
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```

## Misc

### Importing images in SCSS

Please note that paths to images in SCSS files are relative to `source/scss/base/main.scss` as it imports all of the other `.scss` files.

```
.BackgroundImgExample {
  background-image: url(../assets/img/book1.jpg);
}
```

### Importing SVGs as components

Just import your `.svg` files from the `source/assets/svg/` folder, and you are good to go.

```
import CircleSvg from '../../../assets/svg/circle.svg';

// then in your render

<CircleSvg />

```
-----
