'use strict';

const abi = require('ethereumjs-abi');

module.exports = {
    toBytes32,
    fromBytes32
}

function toBytes32(data) {
    return '0x' + abi.rawEncode(["bytes32"], [data]).toString('hex')
}

function fromBytes32(data) {
    return abi.rawDecode(data);
}