/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import {Bounce, Fade} from 'react-reveal'
import { useRecoilState, useRecoilValue } from 'recoil'
import cart, { totalAmount } from '../../../states/cart'
import { CartCard } from '../card'
import Empty from '../empty'


function Cart() {
  const [total, setTotal] = useRecoilState(totalAmount)
  const cartList = useRecoilValue(cart)
  
  useMemo(() => {
    setTotal(
      Number(cartList?.length > 1 ?
      Number(cartList.reduce((a, b) => Number(a) + Number(b.price || 0), 0)):
      Number(cartList[0]?.price)).toFixed(2)
    )
  }, [cartList])
  return (
    <div className='w-full min-h-[85vh] relative pb-2'>
      <div className='w-full h-fit'>
        <Fade big>
          <div className='w-full'>
            <p className='text-base font-medium '>Your Cart</p>
          </div>
        </Fade>
        <div className='w-full h-fit'>
          {cartList?.length ? (
            <div className='w-full'>
              {cartList?.map((n)=>(
                <CartCard 
                  id={n.id}
                  title={n.title}
                  description={n.description}
                  price={n.price}
                />
              ))}
            </div>
            ) : (
              <Empty 
                title="Cart is Empty"
                description="Select available seat that match your preference."
                icon
              />
          )}
        </div>
      </div>
      {cartList.length && total ? (
        <Bounce bottom>
          <div className='w-full h-[120px] space-y-1 absolute bottom-0 bg-primary_light rounded-lg py-4 px-3'>
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
      ):""}
    </div>
  )
}

export default Cart