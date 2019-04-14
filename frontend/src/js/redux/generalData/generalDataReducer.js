import ACTIONS from '../../constants/ACTIONS'

function initialState () {
  return {
    deviceRequests: [],
    locationRequests: [],
    validatorRequests: [],
    installations: [],
    statistics: [],
    activePanels: []
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
    case ACTIONS.GET_STATISTICS:
      return {
        ...state,
        statistics: action.statistics
      }
    case ACTIONS.GET_ACTIVE_PANEL:
      return {
        ...state,
        activePanels: action.activePanels
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
