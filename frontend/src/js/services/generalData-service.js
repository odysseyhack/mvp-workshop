import axios from 'axios'

const generalDataService = {
  getDevicesRequests,
  getLocationsRequests,
  getValidatorsRequests,
  getInstallations
}

function getDevicesRequests () {
  // return {
  //   data: [
  //     {
  //       downvoteCount: 2,
  //       upvoteCount: 1,
  //       title: 'Groningen',
  //       location: 'Theatre Discrict 123',
  //       type: 'new-device',
  //       initiatedDate: 'MAR 11, 2019',
  //       dueDate: '10 minutes'
  //     },
  //     {
  //       downvoteCount: 2,
  //       upvoteCount: 1,
  //       title: 'Groningen',
  //       location: 'Theatre Discrict 123',
  //       type: 'new-device',
  //       initiatedDate: 'MAR 11, 2019',
  //       dueDate: '10 minutes'
  //     }
  //   ]
  // }

  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/solar-panels/suggestions`)
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
