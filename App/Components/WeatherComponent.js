import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/WeatherComponentStyle'
import { connect } from 'react-redux'
import DetailActions from '../Redux/DetailRedux'

export class WeatherComponent extends Component {
  componentDidMount () {
    const { data, detailRequest } = this.props
    detailRequest(data.woeid)
  }
  render () {
    const { data, detail } = this.props
    console.log('detail', detail.data)
    if (detail.data !== null && data.woied === detail.data.woied) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{detail.data.title}</Text>
          <Text style={{fontSize: 14}}>{data.distance}</Text>
          <Text style={{fontSize: 14}}>{data.location_type}</Text>
          <Text style={{fontSize: 14}}>{data.latt_long}</Text>
          <Text style={{fontSize: 14}}>{data.woeid}</Text>
        </View>
      )
    } else return <ActivityIndicator />
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
