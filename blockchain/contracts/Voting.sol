pragma solidity >=0.4.21 <0.6.0;

import "./Validators/Validated.sol";

contract Voting is Validated {
    uint256 votingPeriod = 1000; // number of blocks validators should be able to vote after which election is discarded
    bytes1 add;
    bytes1 remove = '1';
    uint256 minNumberOfVotesForHousehold = 2;

    struct proposition {
        bytes1 propositionType;
        uint256 blockNumber;
        mapping (address => bool) voted;
        uint256 votes;
    }

    mapping (bytes32 => proposition) election;

    function getVotingStatus (bytes32 _election) public view returns (bool) {
        return (election[_election].votes <= (validators.length * 2)/3) && (election[_election].blockNumber + votingPeriod > block.number);
    }

    function _voteH(bytes32 _election) internal returns (bool) {
        return __vote(_election, minNumberOfVotesForHousehold);
    }

    function _vote(bytes32 _election) internal returns (bool) {
        return __vote(_election, (validators.length * 2)/3);
    }

    function __vote(bytes32 _election, uint256 _valThreshold) internal returns (bool) {
        require(election[_election].votes <= _valThreshold);

        if (election[_election].blockNumber == 0) {
            election[_election].blockNumber = block.number;
            election[_election].voted[msg.sender] = true;
            election[_election].votes++;
        } else {
            require(election[_election].blockNumber + votingPeriod >= block.number);
            require(election[_election].voted[msg.sender] == false);

            election[_election].voted[msg.sender] = true;
            election[_election].votes++;
        }

        if (election[_election].votes > _valThreshold) {
            if (election[_election].propositionType == add) {
                election[_election].propositionType = remove;
            } else {
                election[_election].propositionType == add;
            }

            delete election[_election].votes;
            delete election[_election].blockNumber;
            _deleteValidatorVotes(_election);
            return true;
        }
        
        return false;
    }

    function _deleteValidatorVotes(bytes32 _election) internal returns (bool) {
        for (uint256 i = 0; i < validators.length; i++) {
            delete election[_election].voted[validators.validatorsArray[i]];
        }
    }
}