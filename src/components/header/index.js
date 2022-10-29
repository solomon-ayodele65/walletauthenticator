import { Button } from 'antd'
import React, { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'
import logo from '../../resources/icons/logo-inline.svg'

function Header() {
  const { pathname: path } = useLocation()
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full'>
      <div className={`w-full fixed top-0 ${toggle?"h-[350px]":"h-[72px]"} bg-[#0000004D] md:flex md:justify-around py-3`}>
        <div className='flex justify-around'>
          <Link to="/">
            <img alt='section bookie' src={logo} className="w-[180px] img-fluid" />
          </Link>
          <Button 
            type="text"  
            icon={toggle?<CloseOutlined />:<MenuOutlined />}
            className="md:hidden text-[20px] text-primary_base hover:text-primary_base focus:text-primary_base"
            onClick={()=>setToggle(!toggle)}
          />
        </div>
        <div className={`${toggle?"block text-center space-y-10 py-14":"hidden"} text-white md:flex md:space-x-5 md:py-2`}>
          <div className="">
            <Link to="/" className={`${path==="/" && "text-primary_base"} hover:text-primary_base`}>Home</Link>
          </div>
          <div className="">
            <Link to="/booking" className={`${path==="/booking" && "text-primary_base"} hover:text-primary_base`}>Booking</Link>
          </div>
          <div className="">
            <Link to="/contact" className={`${path==="/contact" && "text-primary_base"} hover:text-primary_base`}>Contact</Link>
          </div>
        </div>
        <div className={`${toggle?"flex justify-center space-x-10":"hidden"} text-primary_base md:flex md:space-x-5 py-2`}>
          <div className="">
            <FaInstagram />
          </div>
          <div className="">
            <FaTwitter />
          </div>
          <div className="">
            <FaFacebookF />
          </div>
          <div className="">
            <FaSnapchatGhost />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Header