import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  error: ['response']
})

export const NetworkErrorTypes = Types

export default Creators
