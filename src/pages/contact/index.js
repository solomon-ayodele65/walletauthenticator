import { Input } from 'antd'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaSnapchatGhost, FaTwitter } from 'react-icons/fa'
import { RiCompass3Line, RiMapPinFill } from 'react-icons/ri'
import { Fade } from 'react-reveal'
import Footer from '../../components/footer'

function Contact() {
  return (
    <div className='w-full'>
      <div className='w-full contact_top text-center'>
        <Fade big>
          <div className='px-[20px] md:px-[25%] pt-[24%] md:pt-[10%]'>
            <p className='text-4xl md:text-6xl font-bold'>Contacts</p>
            <p className='text-lg font-medium text-primary_gray'>Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. </p>
          </div>
        </Fade>
      </div>

      <div className='w-full py-10 md:py-20 bg-primary_deep'>
        <div className='w-full md:w-[90%] lg:w-[70%] mx-auto md:flex justify-between space-y-3 md:space-y-0 md:space-x-20 px-3'>
          <div className='w-full md:w-[50%]'>
            <div className='space-y-5'>
              <p className='text-xl md:text-4xl font-extrabold'>Opening Hours:</p>
              <p className='text-base font-medium text-primary_gray'>Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. </p>
              <div className='space-y-3'>
                <p className='flex space-x-2 text-sm font-normal text-primary_gray'><FaPhoneAlt className='text-primary_base' /> <span>0(800)809-3-619</span></p>
                <p className='flex space-x-2 text-sm font-normal text-primary_gray'><RiMapPinFill className='text-primary_base' /> <span>000 Ebby str, New York, 844-053</span></p>
                <p className='flex space-x-2 text-sm font-normal text-primary_gray'><RiCompass3Line className='text-primary_base' /> <span>000 Montna str, New York, 844-053</span></p>
              </div>
            </div>
            <div className="space-x-5 py-2 md:mt-24">
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

          <div className='w-full md:w-[50%]'>
            <div className='w-full rounded-lg bg-primary_light p-10 space-y-3'>
              <Input 
                size='large' 
                className='bg-transparent rounded-lg text-white border-primary_gray'
                placeholder='Your Name' 
              />
              <Input 
                size='large' 
                className='bg-transparent rounded-lg text-white border-primary_gray'
                placeholder='Email' 
              />
              <Input 
                size='large' 
                className='bg-transparent rounded-lg text-white border-primary_gray'
                placeholder='Phone Number' 
              />
              <Input.TextArea
                size='large' 
                className='bg-transparent rounded-lg text-white border-primary_gray min-h-[200px]'
                placeholder='Your Message' 
              />
              <button 
                className='w-full mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.886594233685!2d3.3354926476949056!3d6.602003125664482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b65ba86e15%3A0x3ae060fb3436c3ad!2sIkeja%20City%20Mall!5e0!3m2!1sen!2sng!4v1667503561588!5m2!1sen!2sng" 
          width="100%" 
          height="600" 
          className='border-0' 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title='google map'
        />
      </div>

      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact