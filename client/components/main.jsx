import React, {useState} from 'react'



const Main = (props) => {
  const [userName, setUserName] = useState('')
  const onChange = (e) => {
    const newUserName = e.target.value
    setUserName(newUserName)
    props.onChange(newUserName)
  }

  return (
    <div classMame="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
    
      <input
        id="input-field"
        type="text"
        // className="text-black"
        value={userName}
        onChange={onChange}
      />
      <div className="flex justify-center">
        <button
          id="search-button"
          type="button"
          className="flex rounded py-1 mt-2 px-4 bg-gray-100 shadow text-black font-bold hover:bg-gray-200"
        >
          Go!
        </button>
      </div>
    </div>
  )
}
Main.propTypes = {}

export default Main
