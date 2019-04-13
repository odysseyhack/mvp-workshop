pragma solidity >=0.4.21 <0.6.0; 

contract Owned {
    address public owner;

    event LogOwnerChange(address indexed newOwner);
    
    constructor () public {
        owner = msg.sender;
        emit LogOwnerChange(owner);
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function changeOwner(address newOwner) public onlyOwner {
        owner = newOwner;
        emit LogOwnerChange(owner);
    }
}