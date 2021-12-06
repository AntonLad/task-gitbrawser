import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const ListOfRepos = () => {
  const [arrayOfRepos, setArrayOfRepos] = useState([])
  const { userName } = useParams()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setArrayOfRepos(it.data)
    })
    return () => {}
  }, [userName])

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        {arrayOfRepos.map((it) => {
          return (
            <div key="it.id">
              <Link to={`/${userName}/${it.name}`} className="flex mr-2">
                {it.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
ListOfRepos.propTypes = {}

export default ListOfRepos
