import React, { ChangeEvent } from 'react'
import { addNick } from './state/actions'
import { matchsState } from './state/reducers/matchs'
import { stateInterface } from './state/reducers'
import { useDispatch, useSelector } from 'react-redux'

function App () {
  const dispatch = useDispatch()

  const state = useSelector<stateInterface, stateInterface['matchs']>((state) => state.matchs)

  const onAddNick = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addNick(event.target.value))
  }

  return (
    <div className="App">
      <input name='nick' onChange={onAddNick} type="text" />
      <div>
        {state.nick}
      </div>
    </div>
  )
}

export default App
