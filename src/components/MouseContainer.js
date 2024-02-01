import React, { useState } from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseContainer() {

    const [dispaly, setDispaly] = useState(true)

  return (
    <div>
        <button onClick={()=> setDispaly(!dispaly)}>Mount/Unmount mouse poition</button>
        {
            dispaly && <HookMouse/>
        }
    </div>
  )
}

export default MouseContainer