'use strict';

const Web3 = require('web3');
const build = require('../../../blockchain/build/contracts/nemamoime.json');
const abi = build.abi;

let web3;
let cerifyContract;

let startNonce = {};

module.exports = {
    initializeProviders,
    sendRawTx,
    encodeABI
};

function initializeProviders(provider, contract) {
    web3 = new Web3(provider);
    cerifyContract = new web3.eth.Contract(abi, contract);
}

async function sendRawTx (privateKey, contract, chainId, data) {
    const account = await web3.eth.accounts.privateKeyToAccount(privateKey);
    let nonce = await web3.eth.getTransactionCount(account.address);
    if (startNonce[account.address] == undefined) {
        startNonce[account.address] = -1;
    }

    if (startNonce[account.address] >= nonce) {
        nonce = startNonce[account.address] + 1;
    }

    startNonce[account.address] = nonce;

    const signedTx = await account.signTransaction({
        from: account.address,
        to: contract,
        chainId: chainId,
        nonce: nonce,
        data: data,
        gasPrice: 0,
        gasLimit: 6721974
    });

    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

async function encodeABI(methodName, ...params) {
    return cerifyContract.methods[methodName](...params).encodeABI();
}
