import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRequest: ['lat', 'long'],
  homeSuccess: ['data'],
  homeFailure: null
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  data: null
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) =>
  state.merge({ fetching: true, error: null })

// successful avatar lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, data })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: request,
  [Types.HOME_SUCCESS]: success,
  [Types.HOME_FAILURE]: failure
})
