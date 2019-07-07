import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

export class CalenderWeather extends Component {
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
        <Image src={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
        <View style={{ flexDirection: 'column' }} >
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    )
  }
}

export default CalenderWeather
