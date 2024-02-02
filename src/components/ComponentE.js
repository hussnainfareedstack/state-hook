import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from '../App'

function ComponentE() {
  //useContext Hook Consumption way
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div> 
      <h2>{user} - {channel}</h2>
      <ComponentF/>
    </div>
  )
}

export default ComponentE