import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Pager from '../Pager'
import LoadingSpinner from '../LoadingSpinner'
import { getPlainText } from '../TextEditor'

import qs from 'query-string'

import { fetchPosts } from '../../actions/newsActions'

export default class List extends Component {

  loadData(params=this.props){
    const {page} = qs.parse(params.location.search)
    this.props.dispatch(fetchPosts(page))
  }

  componentWillMount(){
    this.loadData()
  }
  
  componentWillReceiveProps(nextProps){
    const {page} = qs.parse(this.props.location.search)

    if(page !== qs.parse(nextProps.location.search).page){
      this.loadData(nextProps)
    }
  }

  formatDate(date){
    return moment(date).format('MMMM DD, YYYY')
  }

  
  render() {
    const {posts, fetching} = this.props
    const mappedPosts = posts.rows && posts.rows.map(item=> 
      <li key={item.id}>
        <h3 className="title"><Link to={`/news/${item.id}`}>{item.title}</Link></h3>
        <div className="time"><i className="fa fa-clock-o"></i> { this.formatDate(item.postedAt) }</div>
        <p>{ getPlainText(item.content )}</p>
        
      </li> )
    if (fetching) return <LoadingSpinner fetching={fetching} />
    return (
    <div className="container">
      <ul className="posts">
        {mappedPosts}
      </ul>
      <Pager count={posts.count} />
    </div>
    )
  }
}
