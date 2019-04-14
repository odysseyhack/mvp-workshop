import generalDataService from '../../services/generalData-service'
import ACTIONS from '../../constants/ACTIONS'

export {
  getDevicesRequests,
  getLocationsRequests,
  getValidatorsRequests,
  getInstallations,
  voteForDevice,
  getStatistics,
  getActivePanels,
  addPanel,
  removeDevice
}

function getDevicesRequests () {
  return async dispatch => {
    try {
      const devicesData = await generalDataService.getDevicesRequests()
      console.log('devicesData', devicesData)
      dispatch(getDevicesRequestsSuccess(devicesData.data.data.items))
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

function voteForDevice (userID, suggestionID, vote) {
  return async dispatch => {
    try {
      await generalDataService.voteForDevice(userID, suggestionID, vote)
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getStatistics () {
  return async dispatch => {
    try {
      const stats = await generalDataService.getStatistics()
      dispatch(getStatisticsSuccess(stats.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getStatisticsSuccess (statistics) {
  return { type: ACTIONS.GET_STATISTICS, statistics }
}

function getActivePanels () {
  return async dispatch => {
    try {
      const stats = await generalDataService.getActivePanels()
      dispatch(getActivePanelsSuccess(stats.data.data.items))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function getActivePanelsSuccess (activePanels) {
  return { type: ACTIONS.GET_ACTIVE_PANEL, activePanels }
}

function addPanel (userId, data) {
  return async dispatch => {
    try {
      await generalDataService.addPanel(userId, data)
    } catch (error) {
      console.log('error', error)
    }
  }
}

function removeDevice (userId, panelId) {
  return async dispatch => {
    try {
      await generalDataService.removeDevice(userId, panelId)
    } catch (error) {
      console.log('error', error)
    }
  }
}
