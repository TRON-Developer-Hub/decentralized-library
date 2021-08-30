## Creating a Decentralized Library DApp
### Intro
In this workshop, we'll explore how to create decentralized Library. We will use the pre-written Tron smart contract and deploy it using tronide, we can deploy contract on any Testnet or Mainnet .

This dApp uses [Nuxt](https://nuxtjs.org/), but is out of scope for this workshop, so don't worry, we will only be focusing on the pieces that helps us build. In practice, any JS framework can be used.


# Installation
## Check your environment
Prior to all, you should have the following prerequisites installed on your machine:
#### NodeJS version 10 or 12
```
node -v
> v10.24.1
```
If you need to update Node, please [install `nvm`](https://github.com/creationix/nvm#installation) and install/use the LTS version. macOS/Linux commands provided for you below for convenience:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install --lts
nvm use lts
```
#### TronLink

[Download TronLink chrome extension](https://www.tronlink.org/)


# Template clone and explore
Now we have Setup installed properly, let’s grab the dApp template that we will use as the skeleton of our dApp. This template is a website built using Nuxt.js (don't worry if you don't know Nuxt.js, we are not focusing on this part).

## We will...
We will use existing solidity contracts developed in previous session, and then use these functions inside the website.
[Library.sol](./contracts/Library.sol)

## Let's go

Clone the template into your folder:
```
git clone https://github.com/TRON-Developer-Hub/decentralized-library

cd decentralized-library

npm install

## Deploy contract using TronBox
Compile contract:
```
tronbox compile
```
Deploy contract:
```
tronbox migrate --reset --network nile
```
On sucessfull deploy, copy the `contract address`


[NEXT - Complete DApps UI ](./dapps.md)
