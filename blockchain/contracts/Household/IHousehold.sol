pragma solidity >=0.4.21 <0.6.0;

contract IHousehold {
    function isHousehold(bytes32 _id) public view returns (bool);

    function proposeHousehold(bytes32 _id, bytes32 _long, bytes32 _lati, bytes32 _model) public returns (bool);
    
    function voteHouseholdAdd(bytes32 _id) public returns (bool);

    function voteHouseholdRemove(bytes32 _id) public returns (bool);

    event LogHouseholdRemoved(bytes32 _id, bytes32 _long, bytes32 _lati, bytes32 _model);
    event LogHouseholdAdded(bytes32 _id, bytes32 _long, bytes32 _lati, bytes32 _model);
}