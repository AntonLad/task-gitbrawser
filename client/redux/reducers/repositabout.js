import axios from 'axios'

const GET_REPOS_ABOUT = 'GET_REPOS_ABOUT'

const initialValue = {
  readme: ''
}

const repositoryAbout = (state = initialValue, action) => {
  switch (action.type) {
    case GET_REPOS_ABOUT: {
      return {
        ...state,
        readme: action.data
      }
    }
    default:
      return state
  }
}

export default repositoryAbout

export function getReadMe(login, reposName) {
  return (dispatch) => {
    axios
      .post('/api/v1/readme', {
        login,
        reposName
      })

      .then(({ data }) => {
        dispatch({
          type: GET_REPOS_ABOUT,
          data
        })
      })
  }
}
