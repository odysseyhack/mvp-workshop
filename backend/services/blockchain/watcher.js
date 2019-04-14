'use strict'
const Queue = require('better-queue');
const Web3 = require('web3');

const build = require('../../../blockchain/build/contracts/nemamoime.json');
const abi = build.abi;

const utils = require('./utils');

let web3;
let electionContract;

const queue = new Queue(async (event, cb) => {
    await handleEvent(event);
    cb();
}, {
    concurrent: 1
});

module.exports = {
    initializeWatcher,
    start,
};

function initializeWatcher(provider, contract) {
    web3 = new Web3(new Web3.providers.WebsocketProvider(provider));
    electionContract = new web3.eth.Contract(abi, contract);
}

async function start(contract, provider) {
    web3 = new Web3(provider);
    electionContract = new web3.eth.Contract(abi, contract);

    electionContract.getPastEvents('allEvents', {
        fromBlock: 0
    }, (error, events) => {
        for (let i = 0; i < events.length; i++) {
            queue.push(events[i]);
        }
    });

    electionContract.events.allEvents({
        fromBlock: 0
    }).on('data', (event) => {
        queue.push(event);
    });
}

function handleEvent(res) {
    console.log(res.event);
    switch (res.event) {
        case 'LogAPIRemoved': {            
            const _model = res.returnValues._url;
            break;
        }
        case 'LogAPIAdded': {
            const _model = res.returnValues._url;
            break;
        }
        case 'LogGreenDeviceAdded': {
            const _model = res.returnValues._model;
            break;
        }
        case 'LogGreenDeviceRemoved': {
            const _model = res.returnValues._model;
            break;
        }
        case 'LogHouseholdAdded': {
            const data = {
                id: res.returnValues._id,
                long: res.returnValues._long,
                lati: res.returnValues._lati,
                model: res.returnValues._model
            }

            break;
        }
        case 'LogHouseholdRemoved': {
            const data = {
                id: res.returnValues._id,
                long: res.returnValues._long,
                lati: res.returnValues._lati,
                model: res.returnValues._model
            }

            break;
        }
        case 'LogValidatorAdded': {
            const validatorAddr = res.returnValues.validator;
            break;
        }
        case 'LogValidatorRemoved': {
            const validatorAddr = res.returnValues.validator;
            break;
        }
    }
}