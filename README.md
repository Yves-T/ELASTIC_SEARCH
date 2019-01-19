# Elastic Search Example

Original repo: https://github.com/soshace/elastic-search-example

Made minor changes to let the example work with docker. If you use docker for mac set the memory to a min of 4 Gb.
Otherwise you're likely getting hit by the OOM killer ( exit code 137 on elastic search startup )

Example of elastic search integration. Based on Node.js + Koa and Angular 5 on Front-End.

- [Elastic Search Example](#elastic-search-example)
  - [Installation](#installation)
  - [Start](#start)
  - [Usage](#usage)

## Installation

- Install PostgreSQL and Elastic Search (no additional configuration is required) by running docker-compose up
- Run in both **client** and **server** folders:
  ```bash
  npm install
  ```
- In **server** folder run in the following order:
  ```bash
  node database/scripts/initDb.js
  node database/scripts/initTables.js
  node database/scripts/setData.js
  ```
  Don't forget that you can customize those scripts for your own needs (setData especially, probably you want to decrease number of entries).

## Start

- Run in **client** folder:
  ```bash
  npm run bundle
  ```
- Run in **server** folder:
  ```bash
  NODE_ENV=production node index.js
  ```

## Usage

- Visit _http://localhost:8001_;

We are looking forward to meeting you on our website _https://soshace.com_
