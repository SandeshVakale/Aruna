import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import NetworkErrorActions from '../Redux/NetworkErrorRedux'

export function * apiSaga (fn, data, successAction, errorAction) {
  const response = yield call(fn, data)

  if (response.ok) {
    const data = path(['data'], response)
    yield put(successAction(data))
  } else {
    yield put(errorAction())
    yield put(NetworkErrorActions.error(response))
  }
}
