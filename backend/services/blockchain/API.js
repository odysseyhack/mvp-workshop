'use strict';

const web3 = require('./web3');

module.exports = {
    voteAPIAdd,
    voteAPIRemove,
    isAPI
}

const chainId = 5777

async function voteAPIAdd(newApi, contract, privateKey) {
    // convert to bytes32
    const data = await web3.encodeABI('voteAPIAdd', newApi);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function isAPI(api, contract) { //view change
    const data = await web3.encodeABI('isAPI', newValidator);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function voteAPIRemove(api, contract, privateKey) {
    const data = await web3.encodeABI('voteAPIRemove', newValidator);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}