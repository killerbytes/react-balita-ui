import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Post from '../components/Posts/Post'

class PostContainer extends Component {
    
    render(){
        return <Post {...this.props}/>
    }
}

function mapStateToProps(state) {
    const { entities } = state
    const { post, fetching } = entities
    return {
        fetching,
        post
    }
}


export default withRouter(connect(mapStateToProps)(PostContainer))
