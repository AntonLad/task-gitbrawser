import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'

import Header from './header'

const ListOfReposAbout2 = () => {
  const readMe = useSelector((s) => s.repositoryAbout.readme)
  return (
    <div>
      <Header />
      <div className="text-bold">Variant 2</div>
      <div id="description">
        <ReactMarkdown>{readMe}</ReactMarkdown>
      </div>
    </div>
  )
}
ListOfReposAbout2.propTypes = {}

export default ListOfReposAbout2
