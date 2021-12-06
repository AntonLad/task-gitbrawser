const GET_REPOS = 'GET_REPOS'

const initialValue = {
  arrayOfRepos: []
}

const repository = (state = initialValue, action) => {
  switch (action.type) {
    case GET_REPOS: {
      return {
        ...state,
        arrayOfRepos: action.repos
      }
    }
    default:
      return state
  }
}

export default repository

export function getReposit(login) {
  return (dispatch) => {
    fetch('/api/v1/user', {
      method: 'POST',
      body: JSON.stryngify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((repos) => {
        dispatch({
          type: GET_REPOS,
          repos
        })
      })
  }
}
