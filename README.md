# API client

> Ethereum cryptocurrency tracker (Ethereum server side)

[![license-shield][]](LICENSE)

## Table Of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Built With](#built-with)
- [Release History](#release-history)
- [Versionning](#versionning)
- [Authors](#authors)
- [License](#license)

## Setup

- Install the dependencies:

```bash
yarn install
```

- Create the `.env` file from [.sample.env](.sample.env) and modify its values
  (see [Ethers provider](#ethers-provider))):

```bash
cp ./.sample.env .env
```

See [docker-compose](docker-compose.yml) configuration & the
[Dockerfile](Dockerfile).

### Ethers provider

This server uses [Ethers](https://docs.ethers.io/) to fetch the blockchain data.
It looks for the three following ways to create a provider (in this order):

1. Geth IPC file located at `./geth/geth.ipc`
1. URL `ETH_HOST` in `.env`
1. Infura with `ETH_INFURA_API_KEY` in `.env`

## Usage

- Run the server locally in development mode:

```bash
yarn dev
```

- Or run the server in a Docker container:

```bash
docker-compose up --build eth-server
```

## Deployment

- Deploy the server in a Docker container:

```bash
docker-compose -f docker-compose.production.yml up --build eth-server
```

- Or run the server locally:

```bash
yarn start
```

- The server can also just be built (deployed files are located in the `dist`
  repository):

```bash
yarn build
```

## Scripts

- `yarn dev`: See [Usage](#usage).
- `yarn build`: See [Deployment](#deployment).
- `yarn start`: See [Deployment](#deployment).
- `yarn format`: Format the code, apply needed modifications.
- `yarn lint`: Check the code quality.
- `yarn test`: Test the code and generate the test coverage.
- `yarn test:watch`: Watch for modifications to run the tests.

## Built With

[Yarn](https://yarnpkg.com) |
[Node.js](https://nodejs.org) |
[TypeScript](https://www.typescriptlang.org) |
[Eslint](https://eslint.org) |
[Prettier](https://prettier.io) |
[Jest](https://jestjs.io) |
[Pino](https://getpino.io/#/) |
[Web3](https://web3js.readthedocs.io) |
[Uniswap SDK](https://github.com/Uniswap/uniswap-sdk)

## Release History

Check the [`CHANGELOG.md`](CHANGELOG.md) file for the release history.

## Versionning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository][tags-link].

## Authors

- **[Benjamin Guibert](https://github.com/benjamin-guibert)**: Creator & main
  contributor

See also the list of [contributors][contributors-link] who participated in this
project.

## License

[![license-shield][]](LICENSE)

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE)
file for details.

[test-workflow-shield]: https://github.com/cryptotentanz/etherbeam-eth-server/workflows/Test/badge.svg?branch=main
[contributors-link]: https://github.com/cryptotentanz/etherbeam-eth-server/contributors
[license-shield]: https://img.shields.io/github/license/cryptotentanz/etherbeam-eth-server.svg
