import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Header from './header'

const ListOfReposAbout = () => {
  const [readmeFile, setreadmeFile] = useState([])
  const { userName, repositoryName } = useParams()

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((it) => {
        setreadmeFile(it.data)
      })
    return () => {}
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div id="description">
        <ReactMarkdown>{readmeFile}</ReactMarkdown>
      </div>
    </div>
  )
}
ListOfReposAbout.propTypes = {}

export default ListOfReposAbout
