import React from 'react'
import FixedHeader from './FixedHeader'
import FeaturedPost from './FeaturedPost'
import Footer from './Footer'

class Home extends React.Component {
  render () {
    return (
      <div className='homePageContainer'>
        <FixedHeader/>
        <div className='homeBody'>
          <FeaturedPost/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Home
