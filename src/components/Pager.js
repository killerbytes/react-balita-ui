import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import qs from 'query-string'



export default class Posts extends Component {
  componentWillMount(){
      this._setPager()
  }
  componentWillReceiveProps(nextProps){
    this._setPager()
  }
  _setPager(){
    let {page} = qs.parse(window.location.search)
    page = parseInt(page, 10) || 0
    this.setState({
      page: ++page
    })
  }
  render() {
    const {page} = this.state
    return (<div className="mb">
      <ul className="list-default">
      </ul>
      <Link className="btn" to={`/news?page=${page}`}>Next</Link>
    </div>)
  }
}
