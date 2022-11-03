import React from 'react'
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from 'react-icons/fa'
import { RiCompass3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../resources/icons/logo-block.svg'
import { Bounce, Fade } from 'react-reveal'

function Footer() {
  return (
    <div className='w-full'>
      <div className='w-full pt-[50px] md:pt-[100px] bg-primary_deep space-y-16'>
        <Fade big>
          <div className='text-center'>
            <p className='text-primary_red font-medium'>Partner with us</p>
            <p className='text-2xl md:text-3xl lg:text-5xl font-extrabold'>Follow our Partners. Join the fun!</p>
          </div>
        </Fade>
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto bg-primary_red py-5 px-4 md:px-5 md:flex justify-between space-y-5 md:space-y-0'>
          <Bounce left>
            <div className='w-full md:w-[50%] text-center md:text-start'>
              <p className='text-lg md:text-xl font-bold text-black'>Upcoming Events and Special Offers</p>
              <p className='text-xl md:text-3xl font-extrabold text-white'>Get Weekly Newsletters</p>
            </div>
          </Bounce>
          <Bounce right>
            <div className='w-full md:w-[50%] md:flex justify-end md:space-x-5 space-y-3 md:space-y-0'>
              <input 
                type="email" 
                placeholder='Your email address' 
                className='w-full md:w-[60%] h-[56px] bg-transparent text-white placeholder:text-primary_gray border-2 border-primary_gray px-3 rounded-xl focus:border-2 focus:border-primary_gray' 
              />
              <button className='w-full md:w-[40%] h-[56px] bg-black text-white rounded-xl hover:opacity-90'>Subscribe</button>
            </div>
          </Bounce>
        </div>
      </div>

      <div className='w-full bg-primary_deeper py-[50px]'>
        <div className='w-full lg:w-[80%] mx-auto space-y-20 px-5 md:px-0'>
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
            <div className='text-center text-md-start'>
              <p className='text-sm font-normal'><span className='text-primary_base'>Atmost Technologies ©</span> All Rights Reserved - 2023</p>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  )
}

export default Footer