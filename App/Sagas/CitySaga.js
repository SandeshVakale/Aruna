import { apiSaga } from './ApiSagas'
import CityActions from '../Redux/CityRedux'

export function * getWbyCity (api, action) {
  console.log('actions', action, api)
  const { city } = action
  yield * apiSaga(api.getWbyCity, {city: city}, CityActions.citySuccess, CityActions.cityFailure)
}
