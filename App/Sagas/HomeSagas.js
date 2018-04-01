import { apiSaga } from './ApiSagas'
import HomeActions from '../Redux/HomeRedux'

export function * getWbylatlong (api, action) {
  const { lat, long } = action
  yield * apiSaga(api.getWbylatlong, {lat: lat, long: long}, HomeActions.homeSuccess, HomeActions.homeFailure)
}
