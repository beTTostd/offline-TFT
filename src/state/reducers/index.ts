import { combineReducers } from 'redux'

import { reducers as matchs, matchsState } from './matchs'

export interface stateInterface {
  matchs: matchsState
}

export const reducers = combineReducers({
  matchs
})
