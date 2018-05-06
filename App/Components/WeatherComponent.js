import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native'
import styles from './Styles/WeatherComponentStyle'
import { connect } from 'react-redux'
import DetailActions from '../Redux/DetailRedux'

export class WeatherComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  getImageWebMobile () {
    const {data} = this.props
    let city = data.title.toLowerCase()
    city = city.replace(' ', '-')
    city = city.match(/^[A-Za-z]+$/) ? city : 'brussels'
    let url = 'https://api.teleport.org/api/urban_areas/slug:' + city + '/images/'
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async componentDidMount () {
    const photos = await this.getImageWebMobile()
    this.setState({
      isLoading: false,
      dataSource: photos
    }, function () {

    })
  }

  titleCase (str) { // remove _ from label and upper case letter of each word
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
    const {data} = this.props
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }
    let str1 = this.state.dataSource
    let str = str1.status && str1.status === 404 ? 'https://www.wallpaperup.com/uploads/wallpapers/2015/12/22/866095/943406783521d1f882127ba609d531ce-500.jpg' : str1.photos[0].image.web
    return (
      <ImageBackground source={{uri: str}} style={styles.container}>
        <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold'}]}>{this.titleCase(Object.keys(data)[1])}:- {data.title}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[0])}:- {data.distance / 1000} km Away</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[2])}:- {data.location_type}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[4])}:- {data.latt_long}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[3])}:- {data.woeid}</Text>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detailRequest: (woeid) => dispatch(DetailActions.detailRequest(woeid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent)
