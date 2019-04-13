const { expectEvent, shouldFail } = require('openzeppelin-test-helpers');

const CertifyEnergy = artifacts.require('Nemamoime');
const web3 = require('web3');
const abi = require('ethereumjs-abi');

contract('CertifyEnergy', function (accounts) {
    const modelNumbers = [
        '0x' + abi.rawEncode(["bytes32"], ['AB1234']).toString('hex'),
        '0x' + abi.rawEncode(["bytes32"], ['VG1234']).toString('hex')
    ];

    beforeEach(async function () {
        this.certify = await CertifyEnergy.new({from: accounts[0]});

        await this.certify.voteAddValidator(accounts[1], {from: accounts[0]});

        await this.certify.voteAddValidator(accounts[2], {from: accounts[0]});
        await this.certify.voteAddValidator(accounts[2], {from: accounts[1]});

        await this.certify.voteAddValidator(accounts[3], {from: accounts[0]});
        await this.certify.voteAddValidator(accounts[3], {from: accounts[1]});
        await this.certify.voteAddValidator(accounts[3], {from: accounts[2]});
    })

    describe('Adding new APIs', function () {
        it('4 validator is in network', async function () {
            await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[0]});
            await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[1]});
            const { logs } = await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogGreenDeviceAdded', {
                _model: modelNumbers[0]
            })
        });
    });

    describe('Delete API', function () {
        it('4 validator is in network', async function () {            
            await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[0]});
            await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[1]});
            await this.certify.voteGreenDeviceAdd(modelNumbers[0], {from: accounts[2]});

            await this.certify.voteGreenDeviceRemove(modelNumbers[0], {from: accounts[0]});
            await this.certify.voteGreenDeviceRemove(modelNumbers[0], {from: accounts[1]});
            const { logs } = await this.certify.voteGreenDeviceRemove(modelNumbers[0], {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogGreenDeviceRemoved', {
                _model: modelNumbers[0]
            })
        });
    });
})