import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import login from './username'
import repository from './reposit'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    login,
    repository
  })

export default createRootReducer
