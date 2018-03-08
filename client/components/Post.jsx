import React from 'react'
import request from 'superagent'

import Footer from './Footer'
import FixedHeader from './FixedHeader'
import {Image, Transformation} from 'cloudinary-react'

class post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount () {
    request
      .get(`api/v1/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          post: res.body
        })
      })
  }
  render () {
    return (
      <div className = 'postPage'>
        <FixedHeader />
        <div className ='postContainer'>
          <Image cloudName="timstales" publicId="timstales-blogposts/Greece2.jpg"
            className="postPhoto">
            <Transformation crop="scale"/>
          </Image>
          <h1 className='postHeader'>Post Title</h1>
          <p className='postContent'> Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post Content Post ContentPost Content</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default post
