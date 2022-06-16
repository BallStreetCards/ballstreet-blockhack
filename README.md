# ballstreet-bitcoin-bay (ballstreet-bitcoin-bay)

BallStreet submission for Bitcoin Bay

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

## Pitch

Blockchain fragmentation is an issue, and having cross-chain interoperability cross-chain should help with liquidity, ease of use, an much more.

We decided to try to hack our card minting workflow to make it cross-chain. So far this looks good.
We've also looked into building a simple cross-chain voting mechanism on Axelar, since this is an important requirment for our DAO, and it looks promising, as long as we can afford to deploy a simple cross-chain smart contract for each proposal, and then just making use of Axelars' cross-chain methind calling.

We’re building our product, Ball Street, on the NEAR L1 being closely aligned with their roadmap, so we hope we would be able to help bring support for the Aurora network to the Axelar protocol.
