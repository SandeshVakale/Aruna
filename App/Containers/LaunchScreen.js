import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { connect } from 'react-redux'

export class LaunchScreen extends Component {
  componentDidMount () {
    const {homeRequest} = this.props
    homeRequest(19.0760, 72.8777)
  }

  render () {
    const {home} = this.props
    console.log('home', home)

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeRequest: (lat, long) => dispatch(HomeActions.homeRequest(lat, long))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
