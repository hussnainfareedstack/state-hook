import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {

  return (
    <div>
      <UserContext.Consumer>
        {
          user =>{
            return (
              <ChannelContext.Consumer>
                {
                  channel =>{
                    return <h2>User name is {user} and channel name is {channel}</h2>
                  }
                } 
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF