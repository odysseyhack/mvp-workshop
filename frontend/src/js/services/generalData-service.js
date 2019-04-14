import axios from 'axios'

const generalDataService = {
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
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/solar-panels/suggestions`
  )
}

function getLocationsRequests () {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/requests/locations`
  )
}

function getValidatorsRequests () {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/requests/validators`
  )
}

function getInstallations () {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/installations`)
}

function voteForDevice (userID, suggestionID, vote) {
  return axios.post(
    `${
      process.env.REACT_APP_BACKEND_URL
    }/validators/${userID}/solar-panels/suggestions/${suggestionID}/vote`,
    { isUpvote: vote }
  )
}

function getStatistics () {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/statistic`)
}

function getActivePanels () {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/solar-panels?status=ACTIVE`
  )
}

function addPanel (userId, data) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/validators/${userId}/solar-panels/`,
    data
  )
}

function removeDevice (userId, panelId) {
  return axios.post(
    `${
      process.env.REACT_APP_BACKEND_URL
    }/validators/${userId}/solar-panels/${panelId}/downvote`
  )
}

export default generalDataService
