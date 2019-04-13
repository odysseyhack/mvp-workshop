'use strict';

const web3 = require('./web3');

module.exports = {
    voteGreenDeviceAdd,
    voteGreenDeviceRemove,
    isGreenDevice
}

const chainId = 5777;

async function voteGreenDeviceAdd(newModelNumber, contract, privateKey) {
    // convert to bytes32
    const data = await web3.encodeABI('voteGreenDeviceAdd', newModelNumber);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function isGreenDevice(modelNumber, contract) { //view change
    const data = await web3.encodeABI('isGreenDevice', modelNumber);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function voteGreenDeviceRemove(modelNumber, contract, privateKey) {
    const data = await web3.encodeABI('voteGreenDeviceRemove', modelNumber);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}