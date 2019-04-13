pragma solidity >=0.4.21 <0.6.0;

import "./API/API.sol";
import "./GreenDevice/GreenDevice.sol";
import "./Household/Household.sol";
import "./Validators/Validator.sol";

contract nemamoime is Validator, Household, GreenDevice, API {

    constructor () public {
    }
}