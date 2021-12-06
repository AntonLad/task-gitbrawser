const GET_USER = 'GET_USER'

const initialValue = {
  username: ''
}

const login = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state, username: action.user }
    }

    default:
      return state
  }
}

export default login

export function getUserName(user) {
  return {
    type: GET_USER,
    user
  }
}
