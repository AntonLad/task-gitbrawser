import React /* , { useState } */ from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-800 text-white font-bold border shadow-lg p-2 w-screen">
      <div id="repository-name">{userName}</div>
      <div className="flex justify-between w-full">
        <div id="go-back" className="border rounded py-1 px-2">
          <Link to="/">Back</Link>
        </div>
        <div id="go-repository-list" clasName="border rounded py-1 px-2">
          <Link to={`/${userName}`}>To Repository list</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
