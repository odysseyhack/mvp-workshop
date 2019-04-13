pragma solidity >=0.4.21 <0.6.0;

import "./IHousehold.sol";
import "../Voting.sol";
import "../GreenDevice/GreenDevice.sol";

contract Household is IHousehold, Voting, GreenDevice {

    struct HouseholdData {
        bytes32 long;
        bytes32 lati;
        bytes32 model;
    }

    mapping (bytes32 => HouseholdData) households;

    function isHousehold(bytes32 _id) public view returns (bool) {
        return (households[_id].model != bytes32(0));
    }

    function proposeHousehold(bytes32 _id, bytes32 _long, bytes32 _lati, bytes32 _model) public onlyValidator returns (bool) {
        require(election[_id].blockNumber == 0);
        require(election[_id].propositionType == add);
        require(greenDevice[_model] == true);
        bool finished = _voteH(_id);

        households[_id].long = _long;
        households[_id].lati = _lati;
        households[_id].model = _model;

        if (finished) {
            emit LogHouseholdAdded(_id, households[_id].long, households[_id].lati, households[_id].model);
        }
    }
    
    function voteHouseholdAdd(bytes32 _id) public onlyValidator returns (bool) {
        require(election[_id].votes >= 1);
        require(election[_id].propositionType == add);
        bool finished = _voteH(_id);

        if (finished) {
            emit LogHouseholdAdded(_id, households[_id].long, households[_id].lati, households[_id].model);
        }
    }

    function voteHouseholdRemove(bytes32 _id) public onlyValidator returns (bool) {
        require(election[_id].propositionType == remove);
        bool finished = _voteH(_id);

        if (finished) {
            emit LogHouseholdRemoved(_id, households[_id].long, households[_id].lati, households[_id].model);
            delete households[_id];
        }
    }
}