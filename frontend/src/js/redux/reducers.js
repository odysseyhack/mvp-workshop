import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import generalDataReducer from './generalData/generalDataReducer'
import { connectRouter } from 'connected-react-router'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    generalData: generalDataReducer
  })
