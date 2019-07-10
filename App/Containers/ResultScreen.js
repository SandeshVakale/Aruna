import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import CityActions from '../Redux/CityRedux'
import WeatherComponent from '../Components/WeatherComponent'
import NavigationBar from 'react-native-navbar'

export class ResultScreen extends Component {
  componentDidMount () {
    const {cityRequest} = this.props
    const { searchText } = this.props.navigation.state.params
    cityRequest(searchText)
  }
  keyExtractor = (item, index) => index

  render () {
    const {city} = this.props
    let home = city
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigation.goBack()
    }

    console.log('home.length', home.data.length)

    if (home.fetching !== true && home.data !== null && home.error === null && home.data.length !== 0) {
      return (
        <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
          <NavigationBar
            containerStyle={{backgroundColor: 'lightgray'}}
            title={{ title: 'Result' }}
            leftButton={leftButtonConfig} />

          <FlatList style={{backgroundColor: 'lightgray'}}
            data={home.data}
            keyExtractor={this.keyExtractor}
            renderItem={({item}) => <WeatherComponent data={item} {...this.props} />}
          />
        </View>
      )
    } else if (home.data.length === 0) {
      return (<View style={{flex: 1, backgroundColor: 'lightgray'}}><NavigationBar
        containerStyle={{backgroundColor: 'lightgray'}}
        title={{ title: 'Result' }}
        leftButton={leftButtonConfig} /><Text style={{textAlign: 'center'}}> No result found for "{this.props.navigation.state.params.searchText}" </Text></View>
      )
    } else if (home.error !== null) {
      return (<View style={{flex: 1, backgroundColor: 'lightgray'}}><NavigationBar
        containerStyle={{backgroundColor: 'lightgray'}}
        title={{ title: 'Result' }}
        leftButton={leftButtonConfig} /><Text style={{textAlign: 'center'}}> Network error </Text></View>
      )
    } else {
      return (<View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}><ActivityIndicator /></View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cityRequest: (city) => dispatch(CityActions.cityRequest(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)
