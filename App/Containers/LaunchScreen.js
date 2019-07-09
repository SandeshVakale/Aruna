import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import WeatherComponent from '../Components/WeatherComponent'
import NavigationBar from 'react-native-navbar'
import Search from '../Components/SearchBox/index'

export class LaunchScreen extends Component {
  onSearch = (searchText) => {
    const {navigate} = this.props.navigation
    navigate('ResultScreen', {searchText: searchText})
  }

  componentDidMount () {
    const {homeRequest} = this.props
    homeRequest(19.0760, 72.8777)
  }
  keyExtractor = (item, index) => index

  render () {
    const {home} = this.props

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
