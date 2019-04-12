import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import formsReducer from './forms/formsReducer'
import { connectRouter } from 'connected-react-router'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    forms: formsReducer
  })