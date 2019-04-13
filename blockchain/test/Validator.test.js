const { expectEvent, shouldFail } = require('openzeppelin-test-helpers');

const Validator = artifacts.require('Validator')

contract('Validator', function (accounts) {

    beforeEach(async function () {
        this.validator = await Validator.new({from: accounts[0]});
    })

    describe('Adding new validator', function () {
        it('1 validator is in network', async function () {
            const { logs } = await this.validator.voteAddValidator(accounts[1], {from: accounts[0]});

            expectEvent.inLogs(logs, 'LogValidatorAdded', {
                validator: accounts[1]
            })
        });

        it('2 validator is in network', async function () {
            await this.validator.voteAddValidator(accounts[1], {from: accounts[0]});

            await this.validator.voteAddValidator(accounts[2], {from: accounts[0]});
            const { logs } = await this.validator.voteAddValidator(accounts[2], {from: accounts[1]});

            expectEvent.inLogs(logs, 'LogValidatorAdded', {
                validator: accounts[2]
            })
        });
    })

    describe('Removing existing validator', function () {
        it('2 validators in network', async function () {
            await this.validator.voteAddValidator(accounts[1], {from: accounts[0]});

            await this.validator.voteAddValidator(accounts[2], {from: accounts[0]});
            await this.validator.voteAddValidator(accounts[2], {from: accounts[1]});

            const { logs } = await this.validator.voteRemoveValidator(accounts[2], {from: accounts[0]});
            assert(logs.length == 0);
        })

        it('4 validators in network', async function () {
            await this.validator.voteAddValidator(accounts[1], {from: accounts[0]});

            await this.validator.voteAddValidator(accounts[2], {from: accounts[0]});
            await this.validator.voteAddValidator(accounts[2], {from: accounts[1]});

            await this.validator.voteAddValidator(accounts[3], {from: accounts[0]});
            await this.validator.voteAddValidator(accounts[3], {from: accounts[1]});
            await this.validator.voteAddValidator(accounts[3], {from: accounts[2]});

            await this.validator.voteRemoveValidator(accounts[3], {from: accounts[0]});
            await this.validator.voteRemoveValidator(accounts[3], {from: accounts[1]});
            const { logs } = await this.validator.voteRemoveValidator(accounts[3], {from: accounts[2]});

            expectEvent.inLogs(logs, 'LogValidatorRemoved', {
                validator: accounts[3]
            })
        })
    });
})