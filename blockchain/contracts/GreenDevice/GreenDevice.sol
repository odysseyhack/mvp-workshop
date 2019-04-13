pragma solidity >=0.4.21 <0.6.0;

import "./IGreenDevice.sol";
import "../Voting.sol";

contract GreenDevice is IGreenDevice, Voting {    
    mapping (bytes32 => bool) greenDevice;

    function isGreenDevice(bytes32 _model) public view returns(bool) {
        return greenDevice[_model];
    }

    function voteGreenDeviceAdd(bytes32 _model) public onlyValidator returns(bool) {
        require(election[_model].propositionType == add);
        bool finished = _vote(_model);

        if (finished) {
            greenDevice[_model] = true;
            emit LogGreenDeviceAdded(_model);
        }
    }

    function voteGreenDeviceRemove(bytes32 _model) public onlyValidator returns(bool) {
        require(election[_model].propositionType == remove);
        bool finished = _vote(_model);

        if (finished) {
            greenDevice[_model] = false;
            emit LogGreenDeviceRemoved(_model);
        }
    }
}