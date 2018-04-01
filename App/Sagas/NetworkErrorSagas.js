import { put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'

export function * networkError (action) {
  if (action.response.status === 401) {
    yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }))
  } else if (action.response.status === 403) {
    yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }))
  }
}
