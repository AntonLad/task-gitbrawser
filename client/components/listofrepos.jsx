import React from 'react'


const ListOfRepos = () => {
  // const [counter, setCounterNew] = useState(0)

  return (
    <div classMame="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
      <div className="flex justify-center mb-2">Enter username</div>
      <input id="input-field" type="text" className="rounded p-2 text-black" value="" />
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
ListOfRepos.propTypes = {}

export default ListOfRepos
