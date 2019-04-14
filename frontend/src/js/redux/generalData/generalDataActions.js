import generalDataService from '../../services/generalData-service'
import ACTIONS from '../../constants/ACTIONS'

export {
  getDevicesRequests,
  getLocationsRequests,
  getValidatorsRequests,
  getInstallations
}

function getDevicesRequests () {
  return async dispatch => {
    try {
      const devicesData = await generalDataService.getDevicesRequests()
      dispatch(getDevicesRequestsSuccess(devicesData.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getDevicesRequestsSuccess (devicesData) {
  return { type: ACTIONS.GET_DEVICE_REQUESTS, devicesData }
}

function getLocationsRequests () {
  return async dispatch => {
    try {
      const locationsData = await generalDataService.getLocationsRequests()
      dispatch(getLocationsRequestsSuccess(locationsData.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getLocationsRequestsSuccess (locationsData) {
  return { type: ACTIONS.GET_LOCATION_REQUESTS, locationsData }
}

function getValidatorsRequests () {
  return async dispatch => {
    try {
      const validatorsData = await generalDataService.getValidatorsRequests()
      dispatch(getValidatorsRequestsSuccess(validatorsData.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getValidatorsRequestsSuccess (validatorsData) {
  return { type: ACTIONS.GET_VALIDATOR_REQUESTS, validatorsData }
}

function getInstallations () {
  return async dispatch => {
    try {
      const installationsData = await generalDataService.getInstallations()
      dispatch(getInstallationsSuccess(installationsData.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getInstallationsSuccess (installationsData) {
  return { type: ACTIONS.GET_INSTALLATION_DATA, installationsData }
}
