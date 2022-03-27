import React, { useState } from 'react'

function Popup() {
  const [hidePopup, sethidePopup] = useState(false)


  return (
      <>
       <div className={hidePopup ? 'pop_upHide' : "pop_up"}>
        <div className='popup_insidediv'>
          login successfull
         <button className="crossbtn" onClick={()=>sethidePopup(true)}>X</button>
        </div>
       </div>
      </>
  )
}

export default Popup