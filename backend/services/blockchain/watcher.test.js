'use strict';

const watcher = require('./watcher.js');

const contractAddress = '0x2541DAA164A5d062309C782ce94c3A271816bc3d';
const provider = 'http://127.0.0.1:7545'

watcher.initializeWatcher(provider, contractAddress);

watcher.start(contractAddress, provider);
