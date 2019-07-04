import React from 'react'
import RedditList from '../components/RedditList'
import { ScreenWrapper } from '../components/basic/'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <RedditList/>
      </ScreenWrapper>
    )
  }
}

export default HomeScreen