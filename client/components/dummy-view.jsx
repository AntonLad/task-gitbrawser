import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Head from './head'
import Main2 from './main2'
// import ListOfRepos from './listofrepos'
import ListOfRepos2 from './listofrepos2'
// import ListOfReposAbout from './listofreposabout'
import ListOfReposAbout2 from './listofreposabout2'

const Dummy = () => {
  return (
    <div>
      <Head />
      <Switch>
        <Route exact path="/" component={() => <Main2 />} />
        <Route exact path="/:userName" component={() => <ListOfRepos2 />} />
        <Route exact path="/:userName/:repositoryName" component={() => <ListOfReposAbout2 />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
