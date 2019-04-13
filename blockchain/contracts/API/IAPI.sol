pragma solidity >=0.4.21 <0.6.0;

contract IAPI {
    function isAPI(bytes32 _url) public view returns(bool);

    function voteAPIAdd(bytes32 _url) public returns(bool);

    function voteAPIRemove(bytes32 _url) public returns(bool);

    event LogAPIRemoved(bytes32 _url);
    event LogAPIAdded(bytes32 _url);
}