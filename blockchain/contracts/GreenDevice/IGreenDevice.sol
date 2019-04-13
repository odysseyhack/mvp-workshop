pragma solidity >=0.4.21 <0.6.0;

contract IGreenDevice {
    function isGreenDevice(bytes32 _model) public view returns (bool);

    function voteGreenDeviceAdd(bytes32 _model) public returns (bool);

    function voteGreenDeviceRemove(bytes32 _model) public returns (bool);

    event LogGreenDeviceRemoved(bytes32 _model);
    event LogGreenDeviceAdded(bytes32 _model);
}