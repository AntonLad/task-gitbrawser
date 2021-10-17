import React, { useState } from 'react'
import { history } from '../redux'

const InputUser = (props) => {
  const [userName, setUserName] = useState('')
  const onChange = (e) => {
    const newUserName = e.target.value
    setUserName(newUserName)
    props.onChange(newUserName)
  }
  return (
    <div>
      <input
        type="text"
        id="input-field"
        className="rounded p-2 text-black"
        value={userName}
        onChange={onChange}
      />
    </div>
  )
}

const Main = () => {
  const [user, setUser] = useState('')
  const onInputChange = (str) => {
    setUser(str)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center mb-2">Enter username</div>
          <div>
            <InputUser onChange={onInputChange} />
          </div>
          <div>{user}</div>
          <div className="flex justify-center">
            <button
              id="search-button"
              type="button"
              className="flex rounded py-1 mt-2 px-4 bg-gray-100 shadow text-black font-bold hover:bg-gray-200"
              onClick={() => {
                history.push(`/${user}`)
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
Main.propTypes = {}

export default Main
