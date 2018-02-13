import React from 'react'
import FixedHeader from './FixedHeader'
import FeaturedPost from './FeaturedPost'
import HomeBlogs from './HomeBlogs'
import Footer from './Footer'

import posts from '../../data/posts'
import featuredPost from '../../data/featuredPost'

class Home extends React.Component {
  render () {
    return (
      <div className='homePageContainer'>
        <FixedHeader/>
        <div className='homeBody'>
          <FeaturedPost featuredPost = {featuredPost}/>
          <div className = 'posts'>
            <HomeBlogs posts={posts}/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Home
