import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import DetailActions from '../Redux/DetailRedux'
import WeatherComponent from '../Components/WeatherComponent'
import NavigationBar from 'react-native-navbar'
export class LaunchScreen extends Component {
  componentDidMount () {
    const {homeRequest, detailRequest} = this.props
    homeRequest(48.792001, 2.39851)
    detailRequest(44418)
  }
  keyExtractor = (item, index) => index

  render () {
    const {home, detail} = this.props
    console.log('home', home)
    console.log('detail', detail)

    if (home.fetching !== true && home.data !== null && home.error === null) {
      return (
        <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
          <NavigationBar
            title={{ title: 'Aruna' }} />
          <FlatList style={{backgroundColor: 'lightgray'}}
            data={home.data}
            keyExtractor={this.keyExtractor}
            renderItem={({item}) => <WeatherComponent data={item} {...this.props} />}
        />
        </View>
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
