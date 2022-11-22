/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import club from '../../../../resources/images/club.svg'
import { Bounce, Fade } from 'react-reveal'
import { MdArrowForwardIos } from 'react-icons/md'
import { RiCalendarTodoLine } from 'react-icons/ri'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { Modal, Radio } from 'antd'
import Calendar from 'moedim'
import moment from 'moment'
import BookingSeatTab from '../../../../components/pages/seat'
import AddOnTab from '../../../../components/pages/add-on'
import OrderTab from '../../../../components/pages/order'
import BookedSeatTab from '../../../../components/pages/booked'
import Cart from '../../../../components/pages/cart'
import view from '../../../../resources/images/view.svg'
import { useRecoilValue } from 'recoil'
import cart, { totalAmount } from '../../../../states/cart'
import { formatDateFull } from '../../../../services/utils'

function BookPage() {
  const [section, setSection] = useState(2)
  const cartList = useRecoilValue(cart)
  const total = useRecoilValue(totalAmount)
  const [calendar, setCalendar] = useState(false)
  const [fullView, setFullView] = useState(false)
  const [detailModal, setDetailModal] = useState(false)
  const [timeValue, setTimeValue] = useState({
    hour: 12,
    min: 0,
    int: "am"
  })
  const { hour, min, int } = timeValue
  const [preDate, setPreDate] = useState(formatDateFull())
  const [value, setValue] = useState({
    date: formatDateFull(),
    time: formatDateFull().getTime()
  })
  const { date } = value

  const steps = [
    {
      id: 1,
      text: "Club X",
      uppercase: false,
      arrow: true,
      active: section >= 1
    },
    {
      id: 2,
      text: "CHOOSE SEAT",
      uppercase: true,
      arrow: true,
      active: section >= 2
    },
    {
      id: 3,
      text: "ADD-ON",
      uppercase: true,
      arrow: true,
      active: section >= 3
    },
    {
      id: 4,
      text: "ORDER CONFIRMATION",
      uppercase: true,
      arrow: true,
      active: section >= 4
    },
    {
      id: 5,
      text: "PAYMENT",
      uppercase: true,
      arrow: false,
      active: section >= 5
    },
  ]


  return (
    <div className='w-full pb-3'>
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
                <button onClick={()=>setFullView(true)} className='w-full lg:w-[30%] py-3 bg-[transparent] text-[white] border-2 rounded-xl hover:bg-[white] hover:text-[black] transition'>
                  View 3D Table settings
                </button>
                <p className='text-primary_red text-sm font-normal'>Select date & seat below</p>
              </div>
            </div>
          </Bounce>
        </div>
        <Bounce bottom>
          <div className='w-full md:hidden px-3 text-center space-y-5'>
            <button onClick={()=>setFullView(true)} className='w-full md:w-[30%] py-2 bg-[transparent] text-[white] border-2 rounded-lg hover:bg-[white] hover:text-[black] transition'>
              Pick Your Table
            </button>
            <p className='text-primary_red text-sm font-normal'>Select date & seat below</p>
          </div>
        </Bounce>
      </div>

      <div className='w-full space-y-1'>
        <div className='w-full hidden md:block bg-primary_deep py-3 pl-5 md:pl-0'>
          <div className='w-full md:w-[90%] lg:w-[70%] mx-auto'>
            <div className='w-full overflow-x-auto pb-1 md:pb-0'>
              <Fade big>
                <div className='w-full inline-flex space-x-6'>
                  {steps.map((n)=>(
                    <div className='flex space-x-6 text-base font-medium' key={n.id}>
                      <p onClick={()=>setSection(n.id <= section ? n.id : section)} className={`cursor-pointer hover:text-primary_base whitespace-nowrap ${n.uppercase && "uppercase"} ${n.active ? "text-primary_base" : "text-primary_gray"}`}>{n.text}</p>
                      <p className='pt-1'>{n.arrow && <MdArrowForwardIos color='#fff' />}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[95%] lg:w-[85%] xl:w-[75%] mx-auto flex justify-between space-x-3'>
          <div className='w-full lg:w-[75%] md:space-y-1'>
            <div className='w-full bg-primary_light md:bg-primary_deep py-3 px-4 mx-auto md:rounded-lg flex justify-between'>
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

            <div className='relative w-full min-h-[80vh] bg-primary_deep mx-auto md:rounded-lg flex justify-between'>
              <div className="w-full h-full bg-transparent">
                <div className='w-full h-full'>
                  {section === 1 && <BookedSeatTab />}
                  {section === 2 && <BookingSeatTab date={(date)} />}
                  {section === 3 && <AddOnTab />}
                  {section === 4 && <OrderTab detailModal={detailModal} setDetailModal={setDetailModal} dateValue={{date, ...timeValue}} />}
                </div>
              </div>
              <Bounce bottom>
                <div className='w-[95%] absolute bottom-0 left-0 right-0 mx-auto py-2'>
                  <button 
                    disabled={section !== 1 && !cartList.length}
                    onClick={()=>{section >= 4 ? setDetailModal(true) : setSection(section+1)}}
                    className='w-full mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'
                  >
                    {section >= 4 ?
                      `Pay ($${total})`:
                    "Proceed"}
                  </button>
                </div>
              </Bounce>
            </div>
          </div>
          <div className='w-[25%] hidden lg:block'>
            <div className='w-full min-h-[90vh] bg-primary_deep py-3 px-3 mx-auto md:rounded-lg p-3'>
              <Cart />
            </div>
          </div>
        </div>
      </div>

      {/* date calender  */}
      <Modal
        visible={calendar}
        onCancel={()=>{setCalendar(false); setPreDate(date)}}
        className="bg-primary_deep text-white w-[200px]"
        bodyStyle={{backgroundColor: "#021422", padding: 0}}
        closable={false}
        footer={false}
        width={"300px"}
      >
        <div className='space-y-5'>
          <div className='w-full text-center'>
            <Calendar className="w-full mx-auto bg-transparent text-white border-0" value={preDate} onChange={(d)=>{setPreDate(d)}} />
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
            <button onClick={()=>{setCalendar(false); setValue({...value, date: preDate})}} className='w-[80%] mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'>Done</button>
          </div>
        </div>
      </Modal>



      {/* full view */}
      <Modal
        visible={fullView}
        onCancel={()=>setFullView(false)}
        bodyStyle={{backgroundColor: "#021422", padding: 0, color: "#fff"}}
        footer={false}
        width={"80%"}
      >
        <img alt='section-bookie' src={view} className="w-full h-full img-fluid" />
      </Modal>
    </div>
  )
}

export default BookPage