import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/WeatherStyle'
import DetailActions from '../Redux/DetailRedux'

class Weather extends Component {
  render () {
    const { data } = this.props
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{data.title}</Text>
        <Text style={{fontSize: 14}}>{data.distance}</Text>
        <Text style={{fontSize: 14}}>{data.location_type}</Text>
        <Text style={{fontSize: 14}}>{data.latt_long}</Text>
        <Text style={{fontSize: 14}}>{data.woeid}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
