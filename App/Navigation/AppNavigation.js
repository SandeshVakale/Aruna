import { StackNavigator } from 'react-navigation'
import Weather from '../Containers/Weather'
import HomeScreen from '../Containers/HomeScreen'
import WeatherList from '../Containers/WeatherList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Weather: { screen: Weather },
  HomeScreen: { screen: HomeScreen },
  WeatherList: { screen: WeatherList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
