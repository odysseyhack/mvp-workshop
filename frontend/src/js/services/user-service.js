import axios from 'axios'

const userService = {
  loginUser,
  registerStepOne,
  registerStepTwo,
  registerUser,
  getUserData,
  logoutUser
}

function getUserData () {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me`)
}

function loginUser (email, password) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
    email,
    password
  })
}

function registerStepOne (data) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/validations/register1`,
    data
  )
}

function registerStepTwo (data) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/validations/register2`,
    data
  )
}

function registerUser (data) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, data)
}

function logoutUser () {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/logout`)
}

export default userService
