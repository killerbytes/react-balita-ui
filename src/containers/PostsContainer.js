import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Posts from '../components/Posts'




class PostsContainer extends Component {
    render(){
        return <Posts {...this.props}/>
    }
}

function mapStateToProps(state) {
    const { entities } = state
    const { posts, fetching } = entities
    return {
        fetching,
        posts
    }
}

export default withRouter(connect(mapStateToProps)(PostsContainer))