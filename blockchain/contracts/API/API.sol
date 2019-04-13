pragma solidity >=0.4.21 <0.6.0;

import "./IAPI.sol";
import "../Voting.sol";

contract API is IAPI, Voting {

    mapping (bytes32 => bool) api;

    function isAPI(bytes32 _url) public view returns(bool) {
        return api[_url];
    }

    function voteAPIAdd(bytes32 _url) public onlyValidator returns(bool) {
        require(election[_url].propositionType == add);
        bool finished = _vote(_url);

        if (finished) {
            api[_url] = true;
            emit LogAPIAdded(_url);
        }
    }

    function voteAPIRemove(bytes32 _url) public onlyValidator returns(bool) {
        require(election[_url].propositionType == remove);
        bool finished = _vote(_url);

        if (finished) {
            api[_url] = false;
            emit LogAPIRemoved(_url);
        }
    }
}