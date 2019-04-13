const { expectEvent, shouldFail } = require('openzeppelin-test-helpers');

const CertifyEnergy = artifacts.require('Nemamoime');
const web3 = require('web3');
const abi = require('ethereumjs-abi');

contract('CertifyEnergy', function (accounts) {
    const urls = [
        '0x' + abi.rawEncode(["bytes32"], ['accuweather']).toString('hex'),
        '0x' + abi.rawEncode(["bytes32"], ['openweather']).toString('hex')
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
            await this.certify.voteAPIAdd(urls[0], {from: accounts[0]});
            await this.certify.voteAPIAdd(urls[0], {from: accounts[1]});
            const { logs } = await this.certify.voteAPIAdd(urls[0], {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogAPIAdded', {
                _url: urls[0]
            })
        });
    });

    describe('Delete API', function () {
        it('4 validator is in network', async function () {            
            await this.certify.voteAPIAdd(urls[0], {from: accounts[0]});
            await this.certify.voteAPIAdd(urls[0], {from: accounts[1]});
            await this.certify.voteAPIAdd(urls[0], {from: accounts[2]});

            await this.certify.voteAPIRemove(urls[0], {from: accounts[0]});
            await this.certify.voteAPIRemove(urls[0], {from: accounts[1]});
            const { logs } = await this.certify.voteAPIRemove(urls[0], {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogAPIRemoved', {
                _url: urls[0]
            })
        });
    });
})