import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

export class CalenderWeather extends Component {

  render () {
    const {data} = this.props

    console.log('data', data)
    return (
      <View style={{flex: 1, width: '100%', padding: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Image style={{height: 40, width: 40, resizeMode: 'contain'}} source={{uri: 'https://www.metaweather.com/static/img/weather/png/' + data.weather_state_abbr + '.png'}} />
        <View style={{ flexDirection: 'column' }} >
          <Text style={[{fontSize: 14}]}>Air Pressure   :- {data.air_pressure}</Text>
          <Text style={[{fontSize: 14}]}>Date           :- {data.applicable_date}</Text>
          <Text style={[{fontSize: 14}]}>Humidity       :- {data.humidity}</Text>
          <Text style={[{fontSize: 14}]}>Max Temp       :- {data.max_temp}</Text>
          <Text style={[{fontSize: 14}]}>Min Temp       :- {data.min_temp}</Text>
          <Text style={[{fontSize: 14}]}>Temp           :- {data.the_temp}</Text>
          <Text style={[{fontSize: 14}]}>Wind Direction :- {data.wind_direction_compass}</Text>
          <Text style={[{fontSize: 14}]}>Wind Speed     :- {data.wind_speed}</Text>
        </View>
      </View>
    )
  }
}

export default CalenderWeather
