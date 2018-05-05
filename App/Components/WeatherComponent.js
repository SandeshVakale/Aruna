import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/WeatherComponentStyle'
import { connect } from 'react-redux'

export class WeatherComponent extends Component {
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
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold'}]}>{this.titleCase(Object.keys(data)[1])}:- {data.title}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[0])}:- {data.distance / 1000} km Away</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[2])}:- {data.location_type}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[4])}:- {data.latt_long}</Text>
        <Text style={[styles.text, {fontSize: 14}]}>{this.titleCase(Object.keys(data)[3])}:- {data.woeid}</Text>
      </View>
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
