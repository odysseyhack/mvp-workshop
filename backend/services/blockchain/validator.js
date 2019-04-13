'use strict';

const web3 = require('./web3');

module.exports = {
    voteAddValidator,
    isValidator,
    voteRemoveValidator
}

const chainId = 5777;

async function voteAddValidator(newValidator, contract, privateKey) {
    // convert to bytes32
    const data = await web3.encodeABI('voteAddValidator', newValidator);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function isValidator(validator, contract) { //view change
    const data = await web3.encodeABI('isValidator', newValidator);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function voteRemoveValidator(validator, contract, privateKey) {
    const data = await web3.encodeABI('voteRemoveValidator', newValidator);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}