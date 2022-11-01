import React from 'react'
import {Fade, Bounce} from 'react-reveal'
import empty from '../../../resources/icons/empty.svg'


function BookingSeatTab() {
  return (
    <div className='w-full'>
       <div className='w-full h-full relative'>
        <Fade big>
          <div className='w-full h-full text-center space-y-3 mx-auto my-auto pt-[15%]'>
            <img alt='empty' src={empty} className="img-fluid mx-auto" />
            <p className='text-base font-medium'>No available seat &#128546;</p>
            <p className='text-xs font-normal text-primary_gray'>Choose another date</p>
          </div>
        </Fade>
        <Bounce bottom>
          <div className='absolute bottom-0 w-full'>
            <button disabled className='w-full mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'>Proceed</button>
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default BookingSeatTab