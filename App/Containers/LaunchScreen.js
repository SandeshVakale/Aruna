import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import DetailActions from '../Redux/DetailRedux'
import styles from '../Components/Styles/WeatherComponentStyle'
import WeatherComponent from '../Components/WeatherComponent'

export class LaunchScreen extends Component {
  componentDidMount () {
    const {homeRequest} = this.props
    homeRequest(19.0760, 72.8777)
  }
  keyExtractor = (item, index) => index

  render () {
    const {home} = this.props
    console.log('home', home)

    if (home.fetching !== true && home.data !== null && home.error === null) {
      return (<FlatList
        data={home.data}
        keyExtractor={this.keyExtractor}
        renderItem={({item}) => <WeatherComponent data={item} />}
        />

      )
    } else if (home.error !== null) {
      return (<Text> received error </Text>
      )
    } else {
      return (<View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}><ActivityIndicator /></View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    detail: state.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeRequest: (lat, long) => dispatch(HomeActions.homeRequest(lat, long)),
    detailRequest: (woeid) => dispatch(DetailActions.detailRequest(woeid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
