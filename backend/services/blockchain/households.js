'use strict';

const web3 = require('./web3');

module.exports = {
    voteHouseholdAdd,
    voteHouseholdRemove,
    isHousehold
}

const chainId = 5777;

async function voteHouseholdAdd(id, contract, privateKey) {
    const data = await web3.encodeABI('voteHouseholdAdd', id);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function isHousehold(id, contract) { //view change
    const data = await web3.encodeABI('isHousehold', id);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function voteHouseholdRemove(id, contract, privateKey) {
    const data = await web3.encodeABI('voteHouseholdRemove', id);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}

async function proposeHousehold(id, long, lati, modelNumber, privatekey) {
    const data = await web3.encodeABI('proposeHousehold', id, long, lati, modelNumber);

    return await web3.sendRawTx(privateKey, contract, chainId, data);
}