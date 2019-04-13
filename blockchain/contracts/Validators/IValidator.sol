pragma solidity >=0.4.21 <0.6.0;

contract IValidator {
    function isValidator(bytes32 _validator) public view returns (bool);

    function voteAddValidator(bytes32 _validator) public returns (bool);

    function voteRemoveValidator(bytes32 _validator) public returns (bool);
}