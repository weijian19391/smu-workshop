# Introduction

This is a node.js codebase for doing Test Driven Development exercises. It uses Visual Studio Code Dev Containers, which allows us to do all development work within a container.

## Pre-requisite

You will need the following software/extensions

1. Docker
   1. Install from <https://www.docker.com/products/docker-desktop/>
2. Visual Studio Code (VSCode)
   1. <https://code.visualstudio.com/download>
3. VSCode Extension
   1. <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers>

Because we are developing using VSCode Dev container, there is no need to install any other dependencies.

## Getting started

Follow these steps to jump into your development environment

1. Go to a folder of your choice to clone the project
   1. Run`git clone xxxx`
2. Start VSCode open the Command Palette (F1) and run `Dev Containers: Open folder in Container...`
3. Select the project folder you just cloned
   1. Wait for VSCode to finish initialising the workspace
4. Open VSCode terminal
   1. Open Command Palette (F1) and run `Terminal: Create new terminal (in Active Workspace)`
5. Run the follow command to start the server
   1. `npm install`
   2. `npm run server`
      1. You should see `0|index  | Server running on port 3888` if it's ran successfully

## Overview of the project cloned

This is a nodeJS project, with a single API return a result of whether a sequence is fibonacci.

Technologies used:

1. [Koa](https://koajs.com/) library for server framework
2. [Jest](https://jestjs.io/) library for unit testing
3. [Axios](https://github.com/axios/axios) library for making API request to the local server, for API testing

## Exercise

Your task is to complete the function `isFibonacciSequence` TDD style

1. The function is found in [here](./server/utils/fibonacci.js)
2. The test file is found in [here](./__test__/fibonacci.unit.test.js)

Before starting, ensure that the following command does not throw error

1. `npm run test`