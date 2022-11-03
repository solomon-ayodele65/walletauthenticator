import { DatePicker, Form, Input, Modal } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { Bounce } from 'react-reveal'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'
import cart, { totalAmount } from '../../../states/cart'
import { CartCard } from '../card'

function OrderTab({
  detailModal,
  setDetailModal,
  dateValue
}) {
  const navigate = useNavigate()
  const [payment, setPayment] = useState(false)
  const total = useRecoilValue(totalAmount)
  const cartList = useRecoilValue(cart)
  const [UserDetail, setUserDetail] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    instagram: ""
  })
  const {
    first_name,
    last_name,
    email,
    phone_no,
    instagram
  } =  UserDetail

  const [paymentDetail, setPaymentDetail] = useState({
    card_no: "",
    exp_date: "2025/01",
    cvv: "",
  })
  const {
    card_no,
    exp_date,
    cvv
  } = paymentDetail

  const monthFormat = 'YYYY/MM'

  const {
    date,
    hour,
    min,
    int
  } = dateValue
  return (
    <div className='w-full'>
      <div className=''>
        <p className='text-base font-medium text-white'>Reservation Information</p>
      </div>
      <div className='row'>
        <div className='col-md-6 my-3'>
          <Input 
            size='large' 
            className='bg-transparent rounded-lg text-white'
            placeholder='First Name' 
            value={first_name}
            onChange={({target:{value}})=>setUserDetail({...UserDetail, first_name: value})}
          />
        </div>
        <div className='col-md-6 my-3'>
          <Input 
            size='large' 
            className='bg-transparent rounded-lg text-white'
            placeholder='Last Name' 
            value={last_name}
            onChange={({target:{value}})=>setUserDetail({...UserDetail, last_name: value})}
          />
        </div>
        <div className='col-md-6 my-3'>
          <Input 
            size='large' 
            className='bg-transparent rounded-lg text-white'
            placeholder='Email' 
            value={email}
            onChange={({target:{value}})=>setUserDetail({...UserDetail, email: value})}
          />
        </div>
        <div className='col-md-6 my-3'>
          <Input 
            size='large' 
            className='bg-transparent rounded-lg text-white'
            placeholder='Phone Number' 
            value={phone_no}
            onChange={({target:{value}})=>setUserDetail({...UserDetail, phone_no: value})}
          />
        </div>
        <div className='col-md-6 my-3'>
          <Input 
            size='large' 
            className='bg-transparent rounded-lg text-white'
            placeholder='Instagram handle (optional)' 
            value={instagram}
            onChange={({target:{value}})=>setUserDetail({...UserDetail, instagram: value})}
          />
        </div>
      </div>

      {/* summary modal */}
      <Modal
        visible={detailModal}
        onCancel={()=>setDetailModal(false)}
        className="w-full md:w-[70%] bg-primary_deep text-white p-[12px] md:p-16 border-0 shadow-none no_shadow"
        bodyStyle={{backgroundColor: "#021422", padding: 0, boxShadow: 0, border: 0}}
        closable={false}
        footer={false}
        width={"70%"}
      >
        <div className='space-y-10'>
          <div>
            <p className='text-xl md:text-2xl font-bold text-white'>Order Confirmation</p>
          </div>

          <div className='md:flex justify-between lg:space-x-16 space-y-3 md:space-y-0'>
            <div className='w-full md:w-[50%] md:flex justify-between space-y-3 md:space-y-0'>
              <div className='space-y-2'>
                <p className='w-full truncate text-base font-medium text-primary_base'>Customer Info</p>
                <p className='w-full truncate text-sm font-bold'>{`${first_name || "___"} ${last_name || "___"}`}</p>
                <p className='w-full truncate text-sm font-bold'>{email || "___"}</p>
                <p className='w-full truncate text-sm font-bold'>{phone_no || "___"}</p>
                <p className='w-full truncate text-sm font-bold'>{instagram || "___"}</p>
              </div>
              <div className='space-y-2'>
                <p className='w-full truncate text-base font-medium text-primary_base'>Date Booked</p>
                <p className='w-full truncate text-sm font-bold'>{moment(date).format('ll') || "Nov - 24 - 2022"}</p>
                <span className='w-full truncate text-sm font-normal uppercase'>{`${hour} : ${min} ${int}`}</span>
              </div>
            </div>

            <div className='w-full md:w-[50%]'>
              <p className='text-base font-medium text-primary_base'>Orders</p>
              <div className='w-full space-y-5'>
                <div className='w-full max-h-[150px] md:max-h-[130px] overflow-y-auto'>
                  {cartList?.map((n)=>(
                    <CartCard key={n.id} data={n} />
                  ))}
                </div>
                <Bounce bottom>
                  <div className='w-full h-[120px] space-y-1 bg-primary_light rounded-lg py-4 px-3'>
                    <div className='flex justify-between'>
                      <p className='w-[50%] text-sm font-medium text-primary_gray'>Sub Total</p>
                      <p className='w-[50%] text-base font-medium text-white'>${Number(total || 0).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='w-[50%] text-sm font-medium text-primary_gray'>Tax</p>
                      <p className='w-[50%] text-base font-medium text-white'>${Number(0).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='w-[50%] text-sm font-medium text-primary_gray'>Total</p>
                      <p className='w-[50%] text-base font-medium text-white'>${Number(total || 0).toFixed(2)}</p>
                    </div>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <button 
              onClick={()=>{setDetailModal(false); setPayment(true)}}
              disabled={!(first_name && last_name && email && phone_no)}
              className='w-full mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'
            >
              {`Pay ($${total})`}
            </button>
          </div>
        </div>
      </Modal>

      {/* pay modal  */}
      <Modal
        visible={payment}
        onCancel={()=>setPayment(false)}
        className="w-full md:w-[60%] bg-primary_deep text-white p-[12px] md:p-16 border-0 shadow-none no_shadow"
        bodyStyle={{backgroundColor: "#021422", padding: 0, boxShadow: 0, border: 0}}
        closable={false}
        footer={false}
        width={"60%"}
      >
        <div className='w-full'>
          <Form layout='vertical'>
            <Form.Item label={<span className='text-white'>Card Number</span>} className='w-full'>
              <Input 
                size='large' 
                className='bg-transparent rounded-lg text-white'
                placeholder='Card Number' 
                value={card_no}
                onChange={({target:{value}})=>setPaymentDetail({...paymentDetail, card_no: value})}
              />
            </Form.Item>
            <div className='md:flex space-x-5'>
              <Form.Item label={<span className='text-white'>Expiry Date</span>} className='w-full md:w-[50%]'>
                <Input
                  size='large' 
                  type='month'
                  className='w-full bg-transparent rounded-lg placeholder:text-primary_gray text-primary_gray placeholder-shown:text-primary_gray'
                  value={exp_date}
                  placeholder='Expiry Date' 
                  onChange={({target:{value}})=>setPaymentDetail({...paymentDetail, exp_date: value})}
                />
              </Form.Item>
              <Form.Item label={<span className='text-white'>CVV</span>} className='w-full md:w-[50%]'>
                <Input 
                  size='large' 
                  className='bg-transparent rounded-lg text-white'
                  placeholder='CVV' 
                  value={cvv}
                  onChange={({target:{value}})=>setPaymentDetail({...paymentDetail, cvv: value})}
                />
              </Form.Item>
            </div>
            <Form.Item className='col-12'>
              <button 
                onClick={()=>{navigate("/booking/success")}}
                type="submit"
                disabled={!(card_no && exp_date && cvv)}
                className='w-full mx-[auto] h-[40px] rounded-lg bg-primary_base hover:opacity-80 text-primary_deeper font-medium'
              >
                {`Pay $${total}`}
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default OrderTab