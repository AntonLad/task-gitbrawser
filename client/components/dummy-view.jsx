import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Head from './head'
import Main from './main'
import ListOfRepos from './listofrepos'
import ListOfReposAbout from './listofreposabout'

const Dummy = () => {
  return (
    <div>
      <Head />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <ListOfRepos />} />
        <Route exact path="/:userName/:repositoryName" component={() => <ListOfReposAbout />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
