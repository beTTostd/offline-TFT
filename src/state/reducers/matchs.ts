import { Action, Types } from '../actions'

export interface matchsState {
  nick: string
  server: string
}

const INITIAL_STATE = {
  nick: '',
  server: 'BR'
}

const reducers = (state: matchsState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case Types.addNick:
      return { ...state, nick: action.payload }
    default:
      return state
  }
}

export { reducers }
