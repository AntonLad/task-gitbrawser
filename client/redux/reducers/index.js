import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import login from './username'
import repository from './reposit'
import repositoryAbout from './repositabout'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    login,
    repository,
    repositoryAbout
  })

export default createRootReducer
