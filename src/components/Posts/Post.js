import React, { Component } from 'react'
import moment from 'moment'
import { EditorState } from 'draft-js';

import { setContent } from '../TextEditor'
import LoadingSpinner from '../LoadingSpinner'
import TextEditor from '../TextEditor'
import { fetchPost } from '../../actions/newsActions'
import SocialButtons from '../SocialButtons'


export default class Post extends Component {
  constructor(props){
    super(props)

    this.state = {
      editorState: EditorState.createEmpty()
    }
    
  }
  loadData(params = this.props.match.params){
    this.props.dispatch(fetchPost(params.id))
  }        

  componentWillMount(){
    this.loadData()
  }

  componentWillReceiveProps(nextProps){
    const { match } = this.props

    if(match.params.id !== nextProps.match.params.id){
      this.loadData(nextProps.match.params)
    }
  }

  componentDidMount(){
    // console.log(window.addthis)
    // setTimeout(() => {
      // addthis.layers.refresh(); // important! init the add this widget      
    //   window.addthis.update('share', 'url', window.location.href); // update with initial prop value
    // }, 1000); 
  }

  componentDidUpdate(){

    // const {post } = this.props
    // window.addthis.update('share', 'url', window.location.href); // update with prop value
    
  }

  render() {
    const {post, fetching} = this.props
    const postedAt =  moment(post.postedAt).format('MMMM DD, YYYY')
    const shareUrl = window.location.href



    if (fetching) return <LoadingSpinner fetching={fetching} />
    return (
      
      <div className="container">
        <div className="flex">
          <div className="main">
            <h1 className="title">{post.title}</h1>
            <div className="time"><i className="fa fa-clock-o"></i> { postedAt }</div>
            {post.content && <TextEditor editorState={setContent(post.content)} isPreview={true} editorClassName="editor-main"/>}
            <SocialButtons shareUrl={shareUrl} title={post.title}></SocialButtons>
          </div>
          <aside>
          </aside>
        </div>
      </div>

    )
  }
}
