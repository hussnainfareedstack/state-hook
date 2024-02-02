import React from 'react'

function Button({handleClick, children}) {

  return (
    <div>
      {
        console.log(`Rendering Button - ${children}`)
      }
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}

export default React.memo(Button)