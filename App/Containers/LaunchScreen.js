import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import WeatherComponent from '../Components/WeatherComponent'
import NavigationBar from 'react-native-navbar'
import Search from '../Components/SearchBox/index'

export class LaunchScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lastLat: 19.0760, // initial location mumbai
      lastLong: 72.8777,
      error: null
    }
  }
  onSearch = (searchText) => {
    const {navigate} = this.props.navigation
    navigate('ResultScreen', {searchText: searchText})
  }

  askLocation () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lastLat: position.coords.latitude,
          lastLong: position.coords.longitude,
          error: null
        })
        const {homeRequest} = this.props
        homeRequest(this.state.lastLat, this.state.lastLong)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  componentDidMount () {
    this.askLocation()
    const {homeRequest} = this.props
    homeRequest(this.state.lastLat, this.state.lastLong)
  }
  keyExtractor = (item, index) => index

  render () {
    const {home} = this.props
    console.log('this.state', this.state)
    if (home.fetching !== true && home.data !== null && home.error === null) {
      return (
        <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
          <NavigationBar
            containerStyle={{backgroundColor: 'lightgray'}}
            title={{ title: 'Aruna' }} />
          <Search ref='search_box'
            onSearch={this.onSearch}
            inputHeight={35}
            contentWidth={50}
            placeholder={'Enter City'}
            cancelTitle={'cancel'}
            height={50}
            shadowVisible />

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
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeRequest: (lat, long) => dispatch(HomeActions.homeRequest(lat, long))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
