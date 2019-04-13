'use strict';

const bc = require('./index');
const web3 = require('./web3');

const contractAddress = '0x9030d56829a0A503FcAbE2EA5AD96fAfEC562F44';
const provider = 'http://127.0.0.1:7545';

const privateKeys = [
    '0x663f2d20768726f198eb8e70d625883bbcbbcdd0aa67661c15440e36523653d7',
    '0x57e3c6009102c70139a35c109916699b70dc206cb694742756dbfd4ae6985c0f',
    '0xe88003c6d9aa22267d0e109d7226676e7fb013bcb23f67e54dd705e92a67c8a0',
    '0x61c13c00cab207fe898647bd2b0a69b5d1cd2e0e3605ed7592a1952c748335e5'
]

const address = [
    '0x8dA85B10db66941733651755b2b01855692052E8',
    '0xFa07413902b8A3A18EF3d1d6B6732638C7eD2E5d',
    '0x3BC16B03a2c6D288f62E6646C76B0DC616Cb838a',
    '0X1F2B4357542007309D8A4F4B7C19EBC134EE76EB'
]

web3.initializeProviders(provider, contractAddress);

bc.validator.voteAddValidator(bc.utils.toBytes32(address[1]), contractAddress, privateKeys[0]).then((res) => {
    if (res.logs.length >= 1)  {
        console.log('Added Validator', address[1]);
    }
})

bc.validator.voteAddValidator(bc.utils.toBytes32(address[2]), contractAddress, privateKeys[0]).then((res) => {
    if (res.logs.length >= 1)  {
        console.log('Added Validator');
    }
})
bc.validator.voteAddValidator(bc.utils.toBytes32(address[2]), contractAddress, privateKeys[1]).then((res) => {
    if (res.logs.length >= 1)  {
        console.log('Added Validator', address[2]);
    }
})
