import React, { Component } from 'react'
import { ShareButtons, generateShareIcon } from 'react-share'

class SocialButtons extends Component {

  render(){
    const { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const GooglePlusIcon = generateShareIcon('google');
    const TwitterIcon = generateShareIcon('twitter');
    
    const {shareUrl, title} = this.props

    return (
      <div className="social-buttons">
        <FacebookShareButton
          title={title}
          url={shareUrl}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <GooglePlusShareButton
          title={title}
          url={shareUrl}>
          <GooglePlusIcon size={32} />
        </GooglePlusShareButton>
        <TwitterShareButton
          title={title}
          url={shareUrl}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </div>
    )    
  }
}

export default SocialButtons