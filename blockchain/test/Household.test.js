const { expectEvent, shouldFail } = require('openzeppelin-test-helpers');

const CertifyEnergy = artifacts.require('Nemamoime');
const web3 = require('web3');
const abi = require('ethereumjs-abi');

contract('CertifyEnergy', function (accounts) {
    const modelNumbers = [
        '0x' + abi.rawEncode(["bytes32"], ['AB1234']).toString('hex'),
        '0x' + abi.rawEncode(["bytes32"], ['VG1234']).toString('hex')
    ];

    const households = [{
        id: '0x' + abi.rawEncode(["bytes32"], ['4']).toString('hex'),
        long: '0x' + abi.rawEncode(["bytes32"], ['44.4']).toString('hex'),
        lati: '0x' + abi.rawEncode(["bytes32"], ['45.5']).toString('hex'),
        model: modelNumbers[0]
    }];

    beforeEach(async function () {
        this.certify = await CertifyEnergy.new({from: accounts[0]});

        await this.certify.voteAddValidator(accounts[1], {from: accounts[0]});

        await this.certify.voteAddValidator(accounts[2], {from: accounts[0]});
        await this.certify.voteAddValidator(accounts[2], {from: accounts[1]});

        await this.certify.voteAddValidator(accounts[3], {from: accounts[0]});
        await this.certify.voteAddValidator(accounts[3], {from: accounts[1]});
        await this.certify.voteAddValidator(accounts[3], {from: accounts[2]});

        
        await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[0]});
        await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[1]});
        await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[2]});
    })

    describe('Adding new Household', function () {
        it('4 validator is in network and one registered panel', async function () {
            await this.certify.proposeHousehold(households[0].id, households[0].long, households[0].lati, households[0].model, {from: accounts[0]});
            await this.certify.voteHouseholdAdd(households[0].id, {from: accounts[1]});
            const { logs } = await this.certify.voteHouseholdAdd(households[0].id, {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogHouseholdAdded', {
                _id: households[0].id,
                _long: households[0].long,
                _lati: households[0].lati,
                _model: households[0].model
            })
        });
    });

    describe('Remove household', function () {
        it('4 validator is in network', async function () {            
            await this.certify.proposeHousehold(households[0].id, households[0].long, households[0].lati, households[0].model, {from: accounts[0]});
            await this.certify.voteHouseholdAdd(households[0].id, {from: accounts[1]});
            await this.certify.voteHouseholdAdd(households[0].id, {from: accounts[2]});

            await this.certify.voteHouseholdRemove(households[0].id, {from: accounts[0]});
            await this.certify.voteHouseholdRemove(households[0].id, {from: accounts[1]});
            const { logs } = await this.certify.voteHouseholdRemove(households[0].id, {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogHouseholdRemoved', {
                _id: households[0].id,
                _long: households[0].long,
                _lati: households[0].lati,
                _model: households[0].model
            })
        });
    });
})