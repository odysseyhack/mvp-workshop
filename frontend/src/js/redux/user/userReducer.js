import ACTIONS from '../../constants/ACTIONS'

function initialState () {
  let user = localStorage.getItem('user')
  user = user ? JSON.parse(user) : {}

  return {
    profile: user,
    userProfile: {},
    role: null,
    userId: null
  }
}

export default function userReducer (state = initialState(), action) {
  switch (action.type) {
    case ACTIONS.USER_REGISTER:
    case ACTIONS.USER_LOGIN:
      return {
        ...state,
        profile: action.userData
      }
    case ACTIONS.GET_USER_DATA:
      return {
        ...state,
        userProfile: action.userData
      }
    case ACTIONS.USER_LOGOUT:
      return {
        ...state,
        profile: {}
      }
    case ACTIONS.SET_USER_ROLE:
      return { ...state, role: action.role }
    case ACTIONS.SET_USER_ID:
      return { ...state, userId: action.userId }
    default:
      return { ...state }
  }
}
