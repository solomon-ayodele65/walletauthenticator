import React from 'react'
import club from '../../resources/images/club.svg'
import { Bounce, Fade } from 'react-reveal'
import { MdArrowForwardIos } from 'react-icons/md'
import { RiCalendarTodoLine } from 'react-icons/ri'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { Modal, Radio } from 'antd'
import { useState } from 'react'
import Calendar from 'moedim'
import moment from 'moment'
import BookingSeatTab from '../../components/pages/seat'
import Cart from '../../components/pages/cart'

function Booking() {
  const [calendar, setCalendar] = useState(false)
  const [timeValue, setTimeValue] = useState({
    hour: 12,
    min: 0,
    int: "am"
  })
  const { hour, min, int } = timeValue
  const [value, setValue] = useState({
    date: new Date(),
    time: new Date().getTime()
  })
  const { date, time } = value
  console.log(time)

  const steps = [
    {
      id: 1,
      text: "Club X",
      uppercase: false,
      arrow: true,
      active: true
    },
    {
      id: 2,
      text: "CHOOSE SEAT",
      uppercase: true,
      arrow: true,
      active: true
    },
    {
      id: 3,
      text: "ADD-ON",
      uppercase: true,
      arrow: true,
      active: false
    },
    {
      id: 4,
      text: "ORDER CONFIRMATION",
      uppercase: true,
      arrow: true,
      active: false
    },
    {
      id: 5,
      text: "PAYMENT",
      uppercase: true,
      arrow: false,
      active: false
    },
  ]

  return (
    <div className='w-full'>
      <div className='w-full booking-top pb-3 md:pb-0 space-y-3'>
        <div className='w-full md:w-[80%] mx-auto flex pt-[80px] pb-[10px] px-3 md:px-0 space-y-3 md:space-y-0'>
          <Bounce left>
            <div className='w-[30%] md:w-[150px]'><img alt='booking' className='w-full rounded-[8px] h-[100px] md:h-[150px] img-fluid' src={club} /></div>
          </Bounce>
          <Bounce right>
            <div className='w-[70%] space-y-2'>
              <p className='text-white text-xl md:text-3xl font-bold'>Club X</p>
              <p className='text-base font-normal text-primary_gray w-full md:w-auto truncate'>Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. </p>
              <div className='w-full hidden md:block space-y-2'>
                <button className='w-full md:w-[30%] py-3 bg-[transparent] text-[white] border-2 rounded-xl hover:bg-[white] hover:text-[black] transition'>
                  View 3D Table settings
                </button>
                <p className='text-primary_red text-sm font-normal'>Select date & seat below</p>
              </div>
            </div>
          </Bounce>
        </div>
        <Bounce bottom>
          <div className='w-full md:hidden px-3 text-center space-y-5'>
            <button className='w-full md:w-[30%] py-2 bg-[transparent] text-[white] border-2 rounded-lg hover:bg-[white] hover:text-[black] transition'>
              Pick Your Table
            </button>
            <p className='text-primary_red text-sm font-normal'>Select date & seat below</p>
          </div>
        </Bounce>
      </div>

      <div className='w-full space-y-1'>
        <div className='w-full hidden md:block bg-primary_deep py-3 pl-5 md:pl-0'>
          <div className='w-full md:w-[70%] mx-auto'>
            <div className='w-full overflow-x-auto pb-1 md:pb-0'>
              <Fade big>
                <div className='w-full inline-flex space-x-6'>
                  {steps.map((n)=>(
                    <div className='flex space-x-6 text-base font-medium' key={n.id}>
                      <p className={`cursor-pointer hover:text-primary_base whitespace-nowrap ${n.uppercase && "uppercase"} ${n.active ? "text-primary_base" : "text-primary_gray"}`}>{n.text}</p>
                      <p className='pt-1'>{n.arrow && <MdArrowForwardIos color='#fff' />}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[75%] mx-auto flex justify-between space-x-3'>
          <div className='w-[75%] space-y-1'>
            <div className='w-full bg-primary_deep py-3 px-4 mx-auto md:rounded-lg flex justify-between'>
              <div className='flex space-x-3'>
                <p className='text-2xl text-primary_base'><RiCalendarTodoLine /></p>
                <div className=''>
                  <p className='text-sm font-bold'>{moment(date).format('ll') || "Nov - 24 - 2022"}</p>
                  <span className='text-sm font-normal uppercase'>{`${hour} : ${min} ${int}`}</span>
                  {/* <span className='text-sm font-normal'>{moment(time).format('LT') || "10:30 AM"}</span> */}
                </div>
              </div>
              <div>
                <button onClick={()=>setCalendar(true)} className='w-full md:w-auto px-[5px] md:px-10 py-2 bg-[transparent] text-primary_base border-2 border-primary_base rounded-xl hover:bg-primary_base hover:text-[black] transition'>
                  Change Date
                </button>
              </div>
            </div>

            <div className='w-full min-h-[80vh] bg-primary_deep py-3 px-4 mx-auto md:rounded-lg flex justify-between'>
              <BookingSeatTab />
            </div>
          </div>
          <div className='w-[25%]'>
            <div className='w-full min-h-[90vh] bg-primary_deep py-3 px-4 mx-auto md:rounded-lg p-3'>
              <Cart />
            </div>
          </div>
        </div>
      </div>

      {/* date calender  */}
      <Modal
        visible={calendar}
        onCancel={()=>setCalendar(false)}
        className="bg-primary_deep text-white w-[200px]"
        bodyStyle={{backgroundColor: "#021422", padding: 0}}
        closable={false}
        footer={false}
        width={"300px"}
      >
        <div className='space-y-5'>
          <div className='w-full text-center'>
            <Calendar className="w-full mx-auto bg-transparent text-white border-0" value={date} onChange={(d)=>setValue({...value, date: d})} />
          </div>
          <div className='w-full flex justify-center text-white space-x-3'>
            <div className='text-center space-y-1'>
              <button onClick={()=>setTimeValue({...timeValue, hour: hour < 12 ? hour + 1 : 1})} className='w-[50px] h-[20px] text-center bg-primary_light border-2 border-primary_light text-white hover:bg-primary_light hover:opacity-70'>
                <IoIosArrowUp className='mx-auto' />
              </button>
              <p className='w-[50px] h-[30px] pt-[5%] text-xl font-normal bg-primary_light'>{hour}</p>
              <button onClick={()=>setTimeValue({...timeValue, hour: hour < 2 ? 12 : hour - 1})} className='w-[50px] h-[20px] text-center bg-primary_light border-2 border-primary_light text-white hover:bg-primary_light hover:opacity-70'>
                <IoIosArrowDown className='mx-auto' />
              </button>
            </div>
            <p className='text-5xl font-bold pt-[5%]'>:</p>
            <div className='text-center space-y-1'>
              <button onClick={()=>setTimeValue({...timeValue, min: min < 59 ? min + 1 : 0})} className='w-[50px] h-[20px] text-center bg-primary_light border-2 border-primary_light text-white hover:bg-primary_light hover:opacity-70'>
                <IoIosArrowUp className='mx-auto' />
              </button>
              <p className='w-[50px] h-[30px] pt-[5%] text-xl font-normal bg-primary_light'>{min}</p>
              <button onClick={()=>setTimeValue({...timeValue, min: min < 1 ? 59 : min - 1})} className='w-[50px] h-[20px] text-center bg-primary_light border-2 border-primary_light text-white hover:bg-primary_light hover:opacity-70'>
                <IoIosArrowDown className='mx-auto' />
              </button>
            </div>
            <div className='pt-[7%]'>
              <p><Radio checked={int === "am"} onChange={()=>setTimeValue({...timeValue, int: "am"})} className='text-white'>AM</Radio></p>
              <p><Radio checked={int === "pm"} onChange={()=>setTimeValue({...timeValue, int: "pm"})} className='text-white'>PM</Radio></p>
            </div>
          </div>
          <div className='w-full text-center'>
            <button onClick={()=>setCalendar(false)} className='w-[80%] mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'>Done</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Booking