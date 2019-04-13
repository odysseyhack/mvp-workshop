pragma solidity >=0.4.24 <0.6.0;

import "./IValidator.sol";
import "../Voting.sol";

contract Validator is IValidator, Voting {    

    function isValidator(bytes32 _validator) public view returns (bool) {
        return (validators.val[address(uint160(uint256(_validator)))]);
    }

    function voteAddValidator(bytes32 _validator) public onlyValidator returns (bool) {
        require(election[_validator].propositionType == add);
        bool finished = _vote(_validator);

        if (finished) {
            address val = address(uint160(uint256(_validator)));
            addValidator(val);
        }
    }

    function voteRemoveValidator(bytes32 _validator) public onlyValidator returns (bool) {
        require(election[_validator].propositionType == remove);
        bool finished = _vote(_validator);

        if (finished) {
            address val = address(uint160(uint256(_validator)));
            removeValidator(val);
        }
    }
}