import axios from 'axios'

const generalDataService = {
  getDevicesRequests,
  getLocationsRequests,
  getValidatorsRequests,
  getInstallations
}

function getDevicesRequests () {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/requests/devices`)
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

export default generalDataService
