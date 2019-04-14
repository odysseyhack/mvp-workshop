import userService from '../../services/user-service'
import ACTIONS from '../../constants/ACTIONS'
import axios from 'axios'
import determineUserRole from '../../helpers/determine-user-role'

export { loginUser, registerStepOne, registerStepTwo, registerUser, logoutUser }

function loginUser (email, password, onSuccess) {
  return async dispatch => {
    try {
      const userData = await userService.loginUser(email, password)

      axios
        .post(process.env.REACT_APP_BACKEND_URL + '/users/me')
        .then(response => {
          const userRole = determineUserRole(response.data.data.role)
          dispatch(onSuccess(userRole))
        })

      // dispatch(loginUserSuccess(account))
    } catch (error) {
      console.log('error', error)
    }
  }
}

function loginUserSuccess (userData) {
  return { type: ACTIONS.USER_LOGIN, userData }
}

function registerStepOne (data, onSuccess) {
  return async dispatch => {
    try {
      const realData = {
        email: data.email,
        latitude: data.location.lat,
        longitude: data.location.lng,
        password: data.password,
        device_model: data.panelModel,
        serial_number: data.panelSerialNumber
      }

      await userService.registerStepOne(realData)

      dispatch(onSuccess())
    } catch (error) {
      console.log('error', error)
    }
  }
}

function registerStepTwo (data, onSuccess) {
  return async dispatch => {
    try {
      const realData = {
        email: data.email,
        latitude: data.location.lat,
        longitude: data.location.lng,
        password: data.password,
        device_model: data.panelModel,
        serial_number: data.panelSerialNumber
      }

      await userService.registerStepTwo(realData)

      dispatch(onSuccess())
    } catch (error) {
      console.log('error', error)
    }
  }
}

function registerUser (data, onSuccess) {
  return async dispatch => {
    try {
      const realData = {
        email: data.email,
        latitude: data.location.lat,
        longitude: data.location.lng,
        password: data.password,
        device_model: data.panelModel,
        serial_number: data.panelSerialNumber
      }

      const userData = await userService.registerUser(realData)
      const account = userData.data.account
      dispatch(registerUserSuccess(account))
      dispatch(onSuccess())
    } catch (error) {
      console.log('error', error)
    }
  }
}

function registerUserSuccess (userData) {
  return { type: ACTIONS.USER_REGISTER, userData }
}

function logoutUser () {
  return async dispatch => {
    userService.logoutUser()
    dispatch(logoutUserSuccess())
  }
}

function logoutUserSuccess () {
  return { type: ACTIONS.USER_LOGOUT }
}
