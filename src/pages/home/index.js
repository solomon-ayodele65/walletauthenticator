import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import { Fade, Bounce } from 'react-reveal'
import { RiFilmLine } from 'react-icons/ri'
import club from '../../resources/images/club.svg'
import user from '../../resources/images/user.svg'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

function DemoPage() {
  const how = [
    {
      id: 1,
      title: "search",
      value: "Search through our club list to Reserve your sections with the top clubs in the city."
    },
    {
      id: 2,
      title: "city",
      value: "Choose a city, Select a club and Make your booking to see exactly which table/section you’re going to be seated at, in real-time"
    },
    {
      id: 3,
      title: "book a section",
      value: "Come enjoy an amazing nightlife experience powered by the most reliable online platform."
    }
  ]
  return (
    <div className='w-full h-full'>
      <div className={`w-100 h-[100vh] home-top`}>
        <div className='md:w-[70%] mx-auto pt-[150px] md:pt-[18%] px-3 text-center space-y-5'>
          <Fade top>
            <h1 className='text-3xl md:text-7xl font-black text-white'>
              <span className='text-primary_base'> ARRIVE </span> 
              IN 
              <span className='text-primary_base'> STYLE </span> 
              AS YOUR TABLE 
              <span className='text-primary_base'> AWAITS YOU </span> 
            </h1>
          </Fade>
          <Fade>
            <p className='text-primary_gray md:px-40'>Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. </p>
          </Fade>
          <Fade bottom>
            <div>
              <button className='w-[230px] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'>Book a Table <RightOutlined /></button>
            </div>
          </Fade>
        </div>
      </div>

      <div className='w-full min-h-[500px] py-[50px] md:py-[150px] space-y-10 bg-primary_deep'>
        <Fade big>
          <div className='text-center space-y-5 md:px-5 md:w-[50%] mx-auto'>
            <h1 className='text-white text-3xl md:text-5xl font-extrabold'>How it Works</h1>
            <p className='text-primary_gray'>Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. </p>
          </div>
        </Fade>
        <div className='w-full container md:w-[80%] mx-auto'>
          <div className='row space-y-5 md:space-y-0'>
            {how.map((n)=>(
              <div className='col-md-4' key={n.id}>
                <Bounce bottom>
                  <div className='w-full flex pt-5 px-4 rounded-xl space-x-2 bg-primary_light min-h-[210px]'>
                    <div className='text-3xl text-primary_base'><RiFilmLine /></div>
                    <div className='text-white space-y-2'>
                      <p className='text-lg font-bold uppercase'>{n.title}</p>
                      <p className='text-base font-normal'>{n.value}</p>
                    </div>
                  </div>
                </Bounce>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full bg-primary_deeper py-[50px] md:py-[150px]'>
        <div className='w-full container md:w-[70%] mx-auto'>
          <div className='row space-y-5 px-3 md:px-auto'>
            <div className='col-md-5'>
              <Bounce left>
                <div className=''>
                  <img alt='section-bookie' className='img-fluid' src={club} /> 
                </div>
              </Bounce>
            </div>
            <div className='col-md-7'>
              <Bounce right>
                <div className='text-primary_gray space-y-5 py-auto md:px-10 md:pt-[20%]'>
                  <p className=''><span className='py-2 px-3 border-2 border-primary_base rounded-full'>Top Rated</span></p>
                  <p className='text-white text-5xl font-black'>Club X</p>
                  <p className='text-primary_red'>/ Location : Mamaia</p>
                  <p className='text-lg font-medium'>Fratelli Beach & Ristorante is the jewel of the Fratelli Grup venues. It has a complex set-up, offering a one-stop fun shop experience as it includes a club, a private beach and a restaurant- Biutiful by the Sea.</p>
                  <div className=''>
                    <button className='w-full md:w-[230px] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'>Book a Table <RightOutlined /></button>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full home-testimonial py-[50px] md:py-[80px] space-y-10 md:space-y-20'>
        <Fade big>
          <div className='text-center'>
            <p className='text-primary_red font-medium'>Testimonials</p>
            <p className='text-xl md:text-5xl font-extrabold'>Clubbers Feedback</p>
          </div>
        </Fade>
        <Fade>
          <div className='w-full md:w-[60%] mx-auto relative'>
            <Swiper
              loop
              navigation
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper min-h-[50vh] md:min-h-[40vh] text-white"
              color='white'
            >
              {[1,2,3,4,5].map((n)=>(
                <SwiperSlide>
                  <div className='text-center space-y-5 w-[90%] md:w-[70%] mx-auto'>
                    <div>
                      <img alt='feedback' src={user} className="img-fluid mx-auto" />
                    </div>
                    <p className='text-primary_base font-bold text-lg'>Anastasia Stone</p>
                    <p className='text-white'>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Fade>
      </div>

      <div className='w-full pt-[50px] md:pt-[100px] bg-primary_deep space-y-16'>
        <Fade big>
          <div className='text-center'>
            <p className='text-primary_red font-medium'>Partner with us</p>
            <p className='text-2xl md:text-5xl font-extrabold'>Follow our Partners. Join the fun!</p>
          </div>
        </Fade>
        <div className='w-full md:w-[80%] mx-auto bg-primary_red py-5 px-4 md:px-5 md:flex justify-between space-y-5 md:space-y-0'>
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
    </div>
  )
}

export default DemoPage