import { apiSaga } from './ApiSagas'
import DetailActions from '../Redux/DetailRedux'

export function * getWbywoeid (api, action) {
  const { woeid } = action
  yield * apiSaga(api.getWbywoeid, {woeid: woeid}, DetailActions.detailSuccess, DetailActions.detailFailure)
}
