# Decentralized library

In this workshop, we'll explore how to create decentralized Library. We will use the pre-written Tron smart contract and deploy it using TronBox, we can deploy contract on any Testnet or Mainnet.

This dApp uses [Nuxt](https://nuxtjs.org/), but is out of scope for this workshop, so don't worry, we will only be focusing on the pieces that helps us build. In practice, any JS framework can be used.



Please refer to the following steps to deploy this DApp on Nile testnet
### 1. NodeJS version 10 or 12
```
node -v
> v10.24.1
```
### 2. TronLink

[Download TronLink chrome extension](https://www.tronlink.org/)

### 3. TronBox
```
npm install -g tronbox 
```

### 4. Account 
If there is no Tron account, please use TronLink to create a new Account. And then apply for some test coins of Nile testnet for testing. Please make sure the account has enough TRX. [Get test coins](https://nileex.io/join/getJoinPage)

### 5. Template clone
Now we have Setup installed properly, let’s grab the dApp template that we will use as the skeleton of our dApp. This template is a website built using Nuxt.js (don't worry if you don't know Nuxt.js, we are not focusing on this part).

Clone the template into your folder:
```
git clone https://github.com/TRON-Developer-Hub/decentralized-library

cd decentralized-library

npm install
```
### 6. Modify the privatekey in tronbox.js
Paste your account's private key to 'privateKey' in tronbox.js

### 7. Smart Contract 
Follow [instructions](./instructions.md) to complete the smart contract code. If you only test the template code, please skip this step.

### 8. Deploy contract using TronBox
Compile contract:
```
tronbox compile
```
Deploy contract:
```
tronbox migrate --reset --network nile
```
On sucessfull deploy, copy the `contract address`

### 9. Paste your contract address to variable `libraryContractAddress` on line 5 in [utils.js](./dapp-ui/plugins/utils.js).

### 10. DApp code
Follow [dapps](./dapps.md) to complete the DApp code. If you only test the template code, please skip this step.

### 11. Run DApp UI
```
cd dapp-ui
npm install
npm run dev
```

### 12. Navigate to http://localhost:3000/ to see the app running.

