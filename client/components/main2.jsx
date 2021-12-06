// вариант Main2 - ведение username на главной и обработка при помощи редьюсера. дописан редьюсер и экшен в username.js

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { history } from '../redux'
import { getUserName } from '../redux/reducers/username'
import { getReposit } from '../redux/reducers/reposit'

const Main2 = () => {
  const dispatch = useDispatch()
  const login = useSelector((store) => store.login.username)

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center mb-2">Enter username</div>
          <div>
            <input
              id="username"
              className="flex rounded py-1 mt-2 px-4 bg-gray-100 shadow text-black font-bold hover:bg-gray-300"
              type="text"
              placeholder="Username"
              value={login}
              onChange={(e) => {
                dispatch(getUserName(e.target.value))
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              id="search-button"
              type="button"
              className="flex rounded py-1 mt-2 px-4 bg-gray-100 shadow text-black font-bold hover:bg-gray-300"
              onClick={() => {
                
                history.push(`/${login}`)
                dispatch(getReposit(login))
              }}
            >
              Go 2
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
Main2.propTypes = {}

export default Main2
