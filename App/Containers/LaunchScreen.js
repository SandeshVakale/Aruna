import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import HomeActions from '../Redux/HomeRedux'
import { connect } from 'react-redux'
import WeatherComponent from '../Components/WeatherComponent'
import DetailActions from '../Redux/DetailRedux'
import styles from '../Components/Styles/WeatherComponentStyle'

export class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state =
    {
      ChangeData: this.props.detail,
      data: []
    }
    this.titleCase = this.titleCase.bind()
  }

  componentDidMount () {
    const {homeRequest} = this.props
    homeRequest(48.7920, 2.3985)
  }

  titleCase (str) {
    let mystring = str.replace('_', ' ')
    let splitStr = mystring.toLowerCase().split(' ')
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
  }

  render () {
    const {home} = this.props
    console.log('home', home)

    if (home.fetching !== true && home.data !== null && home.error === null) {
      return (<FlatList
        data={home.data}
        renderItem={({item}) => <View style={styles.container}>
          <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold'}]}>{this.titleCase(Object.keys(item)[1])}:- {item.title}</Text>
          <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(item)[0])}:- {item.distance / 1000} km Away</Text>
          <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(item)[2])}:- {item.location_type}</Text>
          <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(item)[4])}:- {item.latt_long}</Text>
          <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(item)[3])}:- {item.woeid}</Text>
        </View>}
        />

      )
    } else if (home.error !== null) {
      return (<Text> received error </Text>
      )
    } else {
      return (<Text> Fetching data </Text>
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
