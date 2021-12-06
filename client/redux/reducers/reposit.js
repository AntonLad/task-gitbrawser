import axios from 'axios'

const GET_REPOS = 'GET_REPOS'

const initialValue = {
  arrayOfRepos: []
}

const repository = (state = initialValue, action) => {
  switch (action.type) {
    case GET_REPOS: {
      return {
        ...state,
        arrayOfRepos: action.data
      }
    }
    default:
      return state
  }
}

export default repository

export function getReposit(login) {
  return (dispatch) => {
    axios.post('/api/v1/user', { login }).then(({ data }) => {
      dispatch({
        type: GET_REPOS,
        data
      })
    })
  }
}
