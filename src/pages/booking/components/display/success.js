import React from 'react'
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from 'react-icons/fa'
import check from '../../../../resources/icons/check.svg'

function SuccessPage() {
  return (
    <div className='w-full h-[100vh] pt-[30%] md:pt-[15%] text-center space-y-10 px-3'>
      <div className='w-full h-fit space-y-3'>
        <img alt='success' src={check} className="mx-auto" />
        <p className='text-5xl font-extrabold'>Thank you</p>
        <p className='text-lg font-normal text-primary_gray'>You'll recieve an e-mail with your order confirmation and ticket details.</p>
      </div>
      <div className=''>
        <p className='text-lg font-normal text-primary_gray'>Share</p>
        <div className="space-x-5 py-2">
          <button className="p-2 rounded-full bg-primary_base text-black cursor-pointer hover:opacity-95">
            <FaInstagram />
          </button>
          <button className="p-2 rounded-full bg-primary_base text-black cursor-pointer hover:opacity-95">
            <FaTwitter />
          </button>
          <button className="p-2 rounded-full bg-primary_base text-black cursor-pointer hover:opacity-95">
            <FaFacebookF />
          </button>
          <button className="p-2 rounded-full bg-primary_base text-black cursor-pointer hover:opacity-95">
            <FaSnapchatGhost />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage