import React from 'react'
import RedditList from '../components/RedditList'
import { ScreenWrapper } from '../components/basic/'
import { StyleSheet } from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <RedditList style={styles.listContainer}/>
      </ScreenWrapper>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dde1eb',
  },
})

export default HomeScreen