import React from 'react'
import {Fade} from 'react-reveal'
import empty from '../../../resources/icons/empty.svg'

function Empty({title, description, icon}) {
  return (
    <Fade big>
      <div className='w-full h-full text-center space-y-3 mx-auto my-auto pt-[15%]'>
        <img alt='empty' src={empty} className="img-fluid mx-auto" />
        <p className='text-base font-medium'>{title || ""} {icon && <> &#128546;</>}</p>
        <p className='text-xs font-normal text-primary_gray'>{description || ""}</p>
      </div>
    </Fade>
  )
}

export default Empty