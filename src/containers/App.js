import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PostsContainer from './PostsContainer'
import PostContainer from './PostContainer'
import Header from '../components/Header'


const Main = ()=>(
    <Switch>
      <Route path='/news/:id' component={PostContainer}/>
      <Route path='/news/' component={PostsContainer}/>
      <Redirect from="/" to="/news"/>
    </Switch>
)


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { entities } = state
  const { posts } = entities
  return {
      posts
  }
}

export default withRouter(connect(mapStateToProps)(App))
