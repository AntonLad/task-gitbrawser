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
      {arrayOfRepos.map((it) => {
        return (
          <div key="it.id">
            <Link to={`/${userName}/${it.name}`}>{it.name}</Link>
          </div>
        )
      })}
    </div>
  )
}
ListOfRepos.propTypes = {}

export default ListOfRepos
