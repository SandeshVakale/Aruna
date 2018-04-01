import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import {HomeTypes} from '../Redux/HomeRedux'
import { NetworkErrorTypes } from '../Redux/NetworkErrorRedux'
import { DetailTypes } from '../Redux/DetailRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import {getWbylatlong} from './HomeSagas'
import { networkError } from './NetworkErrorSagas'
import { getWbywoeid } from './DetailSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    takeEvery(NetworkErrorTypes.ERROR, networkError),
    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(HomeTypes.HOME_REQUEST, getWbylatlong, api),
    takeEvery(DetailTypes.DETAIL_REQUEST, getWbywoeid, api)
  ])
}
