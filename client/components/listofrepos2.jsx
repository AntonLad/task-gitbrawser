import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from './header'
import { getReadMe } from '../redux/reducers/repositabout'

const ListOfRepos2 = () => {
  const arrayOfRepos = useSelector((s) => s.repository.arrayOfRepos)
  const login = useSelector((store) => store.login.username)
  // const { userName } = useParams()
  const dispatch = useDispatch()

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div>version 2</div>
        {arrayOfRepos.map((it) => {
          return (
            <div key="it.id">
              <Link
                to={`/${login}/${it.name}`}
                className="flex mr-2"
                onClick={() => {
                  dispatch(getReadMe(login, it.name))
                }}
              >
                {it.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
ListOfRepos2.propTypes = {}

export default ListOfRepos2
