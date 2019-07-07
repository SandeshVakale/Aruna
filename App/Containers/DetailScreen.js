import React, { Component } from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'

import NavigationBar from 'react-native-navbar'
import DetailActions from '../Redux/DetailRedux'

class DetailScreen extends Component {
  componentDidMount () {
    const {detailRequest} = this.props
    detailRequest(this.props.navigation.state.params.data.woeid)
  }

  render () {
    console.log('{this.props.woeid}', this.props)
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigation.goBack()
    }
    const {detail} = this.props
    if (detail.fetching !== true && detail.data !== null && detail.error === null) {
      return (
        <View style={{flex: 1}}>
          <NavigationBar
            title={{ title: this.props.navigation.state.params.data.title }}
            leftButton={leftButtonConfig} />
          <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
            <Text>{this.props.navigation.state.params.data.woeid}</Text>
          </View>
        </View>
      )
    } else if (detail.error !== null) {
      return (<Text> received error </Text>
      )
    } else {
      return (<View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}><ActivityIndicator /></View>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
