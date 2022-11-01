import React from 'react'
import empty from '../../../resources/icons/empty.svg'
import {Fade} from 'react-reveal'


function Cart() {
  return (
    <div className='w-full h-full'>
      <Fade big>
        <div>
          <p className='text-base font-medium '>Your Cart</p>
        </div>
      </Fade>
      <Fade big>
        <div className='text-center space-y-3 mx-auto my-auto align-baseline pt-[80%]'>
          <img alt='empty' src={empty} className="img-fluid mx-auto" />
          <p className='text-base font-medium'>Cart is Empty &#128546;</p>
          <p className='text-xs font-normal text-primary_gray'>Select available seat that match your preference.</p>
        </div>
      </Fade>
    </div>
  )
}

export default Cart