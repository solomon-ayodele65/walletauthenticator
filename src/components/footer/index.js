import React from 'react'
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from 'react-icons/fa'
import { RiCompass3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../resources/icons/logo-block.svg'
import { Bounce } from 'react-reveal'

function Footer() {
  return (
    <div className='w-full bg-primary_deeper py-[50px]'>
      <div className='w-full md:w-[80%] mx-auto space-y-20 px-5 md:px-0'>
        <Bounce bottom>
          <div className='w-full md:flex justify-between space-y-5 md:space-y-0'>
            <div className='w-full md:w-[50%] md:flex justify-between md:space-x-5 space-y-5 md:space-y-0'>
              <Link to="/" className='w-full'><img alt='logo' src={logo} className="img-fluid" /></Link>
              <div className=''>
                <p className='text-sm font-normal'>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
              </div>
            </div>
            <div className='space-y-3'>
              <p className='flex space-x-2 text-sm font-normal'><RiCompass3Line className='text-primary_red' /> <span>0(800)809-3-619</span></p>
              <p className='flex space-x-2 text-sm font-normal'><RiCompass3Line className='text-primary_red' /> <span>153 Montna str, New York, 844-053</span></p>
              <p className='flex space-x-2 text-sm font-normal'><RiCompass3Line className='text-primary_red' /> <span>153 Montna str, New York, 844-053</span></p>
            </div>
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
        </Bounce>
        <Bounce bottom>
          <div className='text-center md:text-start'>
            <p className='text-sm font-normal'><span className='text-primary_base'>Atmost Technologies ©</span> All Rights Reserved - 2023</p>
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default Footer