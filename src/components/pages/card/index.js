import React from 'react'
import { useRecoilState } from 'recoil'
import cart from '../../../states/cart'
import fallback from '../../../resources/icons/fallback.jpg'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {Bounce} from 'react-reveal'
import { Image } from 'antd'

function ListCard({data}) {
  const [cartData, setCartData] = useRecoilState(cart)
  const exist = cartData?.find((n)=>n.id === data.id && n?.name === data?.name)

  const handleProduct = () => {
    if(exist){
      const removeList = cartData?.filter((n)=>n.id !== data?.id)
      setCartData([...removeList])
    }else{
      setCartData([...cartData, data])
    }
  }
  
  return (
    <Bounce bottom key={data?.id}>
      <div key={data?.id} onClick={handleProduct} className={`w-full cursor-pointer h-[230px] border-2 rounded-xl p-2 space-y-1 bg-primary_light ${exist ? "border-primary_base" : "border-primary_light"} hover:border-primary_base`}>
        <div className='w-full space-y-1'>
          <img alt={data?.name || data?.title} src={data?.img || fallback} className="w-100 rounded-xl img-fluid" />
          <div className=''>
            <p className='text-base font-medium text-white capitalize'>{data?.name || data?.title || "Product"}</p>
            <p className='text-xs font-semibold text-primary_base'>{data?.description || "description"}</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-base font-medium'>${Number(data?.price || 0).toFixed(2)}</p>
          {exist && <p className='text-primary_base text-2xl'><BsFillCheckSquareFill /></p>}
        </div>
      </div>
    </Bounce>
  )
}

export const CartCard = ({data}) => {
  return (
    <Bounce bottom key={data?.id}>
      <div key={data?.id} className='text-white my-2 p-2 w-full max-h-[50px] rounded-lg bg-primary_light flex justify-between'>
        <div className='flex space-x-2 w-[80%] h-full'>
          <div className='w-[20%] h-fit'>
            <Image alt={data?.name || data?.title} src={data?.img || fallback} className="w-full max-h-[40px] rounded-xl img-fluid" />
          </div>
          <div className=''>
            <p className='text-xs font-normal text-white capitalize'>{data?.name || data?.title || "Product"}</p>
            <p className='text-xs font-normal text-primary_base m-0'>{data?.description || "description"}</p>
          </div>
        </div>
        <div className='pt-3'>
          <p className='text-xs font-normal'>{data?.price || "price"}</p>
        </div>
      </div>
    </Bounce>
  )
}

export default ListCard