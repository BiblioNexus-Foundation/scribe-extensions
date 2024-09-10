# scribe-theia

The example of how to build the Theia-based applications with the scribe-theia.

## Getting started

Please install all necessary [prerequisites](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#prerequisites).

## Installation

    git clone
    cd scribe-theia
    yarn

## Running in dev mode so files are watched and recompiled automatically

    yarn dev:browser
    yarn dev:electron

## Running the browser example

    yarn build:browser
    yarn start:browser

_or:_

    yarn build:browser
    cd browser-app
    yarn start

_or:_ launch `Start Browser Backend` configuration from VS code.

Open http://localhost:3000 in the browser.

## Running the Electron example

    yarn build:electron
    yarn start:electron

_or:_

    yarn build:electron
    cd electron-app
    yarn start

_or:_ launch `Start Electron Backend` configuration from VS code.

## Developing with the browser example

Start watching all packages, including `browser-app`, of your application with

    yarn watch:browser

_or_ watch only specific packages with

    cd scribe-theia
    yarn watch

and the browser example.

    cd browser-app
    yarn watch

Run the example as [described above](#Running-the-browser-example)

## Developing with the Electron example

Start watching all packages, including `electron-app`, of your application with

    yarn watch:electron

_or_ watch only specific packages with

    cd scribe-theia
    yarn watch

and the Electron example.

    cd electron-app
    yarn watch

Run the example as [described above](#Running-the-Electron-example)

## Publishing scribe-theia

Create a npm user and login to the npm registry, [more on npm publishing](https://docs.npmjs.com/getting-started/publishing-npm-packages).

    npm login

Publish packages with lerna to update versions properly across local packages, [more on publishing with lerna](https://github.com/lerna/lerna#publish).

    npx lerna publish
