import ACTIONS from '../../constants/ACTIONS'

function initialState () {
  return {
    deviceRequests: [],
    locationRequests: [],
    validatorRequests: [],
    installations: []
  }
}

export default function userReducer (state = initialState(), action) {
  switch (action.type) {
    case ACTIONS.GET_DEVICE_REQUESTS:
      return {
        ...state,
        deviceRequests: action.devicesData
      }
    case ACTIONS.GET_LOCATION_REQUESTS:
      return {
        ...state,
        deviceRequests: action.locationsData
      }
    case ACTIONS.GET_VALIDATOR_REQUESTS:
      return {
        ...state,
        deviceRequests: action.validatorsData
      }
    case ACTIONS.GET_INSTALLATION_DATA:
      return {
        ...state,
        installations: action.installationsData
      }

    default:
      return { ...state }
  }
}
