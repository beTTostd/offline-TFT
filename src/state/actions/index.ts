export const Types = {
  addNick: 'ADD_NICK'
}

export type Action = {
  type: string
  payload: string
}

export const addNick = (nick: string): Action => ({
  type: Types.addNick,
  payload: nick
})
