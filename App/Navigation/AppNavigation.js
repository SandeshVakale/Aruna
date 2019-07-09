import { StackNavigator } from 'react-navigation'
import DetailScreen from '../Containers/DetailScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ResultScreen from '../Containers/ResultScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DetailScreen: { screen: DetailScreen },
  LaunchScreen: { screen: LaunchScreen },
  ResultScreen: { screen: ResultScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
