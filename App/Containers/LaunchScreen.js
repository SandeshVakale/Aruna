import React, { Component } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import WeatherComponent from '../Components/WeatherComponent'
import DetailActions from '../Redux/DetailRedux'

export class LaunchScreen extends Component {
  componentDidMount () {
    const {homeRequest, detailRequest} = this.props
    homeRequest(48.7920, 2.3985)
    detailRequest(2427032)
  }
  keyExtractor = (item, index) => index

  render () {
    const {home} = this.props
    if (home.data !== null) {
      return (<FlatList
        data={home.data}
        keyExtractor={this.keyExtractor}
        renderItem={({item}) => <WeatherComponent data={item} />}
      />
      )
    } else {
      return <ActivityIndicator />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeRequest: (lat, long) => dispatch(HomeActions.homeRequest(lat, long)),
    detailRequest: (woeid) => dispatch(DetailActions.detailRequest(woeid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
