import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './Styles/WeatherComponentStyle'
import LinearGradient from 'react-native-linear-gradient'

export class CalenderWeather extends Component {
  render () {
    const {data} = this.props

    console.log('data', data)
    return (
      <LinearGradient colors={['lightblue', 'lightblue', 'gray']} style={[styles.container, {flex: 1,
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'}]}>

        <Image style={{height: 40, width: 40, flex: 0.3, resizeMode: 'contain'}} source={{uri: 'https://www.metaweather.com/static/img/weather/png/' + data.weather_state_abbr + '.png'}} />
        <View style={{ flexDirection: 'column', flex: 0.7 }} >

          <Text style={[{fontSize: 14}]}>Air Pressure   :- {data.air_pressure.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Date           :- {data.applicable_date}</Text>
          <Text style={[{fontSize: 14}]}>Humidity       :- {data.humidity.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Max Temp       :- {data.max_temp.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Min Temp       :- {data.min_temp.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Temp           :- {data.the_temp.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Wind Direction :- {data.wind_direction_compass}</Text>
          <Text style={[{fontSize: 14}]}>Wind Speed     :- {data.wind_speed.toFixed(4)}</Text>
          <Text style={[{fontSize: 14}]}>Predictability :- {data.predictability.toFixed(4)}</Text>

        </View>
      </LinearGradient>
    )
  }
}

export default CalenderWeather
