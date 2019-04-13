pragma solidity >=0.4.21 <0.6.0;

contract Validated {
    struct Validators {
        mapping (address => bool) val;
        address[] validatorsArray;
        uint256 length; // @TODO: I don't need this remove
    }
    Validators public validators;

    event LogValidatorRemoved(address validator);
    event LogValidatorAdded(address validator);
    
    constructor () public {
        validators.val[msg.sender] = true;
        validators.validatorsArray.push(msg.sender);
        validators.length++;
        emit LogValidatorAdded(msg.sender);
    }
    
    modifier onlyValidator {
        require(validators.val[msg.sender] == true);
        _;
    }

    function addValidator(address _validator) internal {
        require(validators.val[_validator] == false);

        validators.val[_validator] = true;
        validators.validatorsArray.push(_validator);
        validators.length++;
        emit LogValidatorAdded(_validator);
    }

    function removeValidator(address _validator) internal {        
        require(validators.val[_validator] == true);

        validators.val[_validator] = false;
        for (uint256 i = 0; i < validators.validatorsArray.length; i++) {
            if(validators.validatorsArray[i] == _validator) {
                validators.validatorsArray[i] = validators.validatorsArray[validators.length - 1];
                delete validators.validatorsArray[validators.length - 1];
            }
        }
        validators.length--;
        emit LogValidatorRemoved(_validator);
    }
}