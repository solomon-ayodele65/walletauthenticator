import React from 'react'
import { useRecoilState } from 'recoil'
import cart from '../../../states/cart'
import fallback from '../../../resources/icons/fallback.jpg'
// import product from '../../../resources/images/seat/1.svg'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {Bounce} from 'react-reveal'
import { Image } from 'antd'

function ListCard({
  id, 
  img,
  name, 
  title, 
  price,
  description
}) {
  const [cartData, setCartData] = useRecoilState(cart)
  const exist = cartData?.find((n)=>n.id === id && (n?.name === name || n?.title === title))

  const handleProduct = () => {
    if(exist){
      const removeList = cartData?.filter((n)=>n.id !== id)
      setCartData([...removeList])
    }else{
      setCartData([...cartData, {id, name, title, price, description}])
    }
  }
  return (
    <Bounce bottom key={id}>
      <div key={id} onClick={handleProduct} className={`w-full cursor-pointer min-h-[200px] border-2 rounded-xl p-2 space-y-1 bg-primary_light ${exist ? "border-primary_base" : "border-primary_light"} hover:border-primary_base`}>
        <div className='w-full space-y-1.5'>
          <img alt={name || title || "product"} src={img || fallback} className="w-100 rounded-xl img-fluid" />
          <div className=''>
            <p className='text-base font-medium text-white capitalize'>{name || title || "Product"}</p>
            <p className='text-xs font-semibold text-primary_base'>{description || "description"}</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-base font-medium'>${Number(price || 0).toFixed(2)}</p>
          {exist && <p className='text-primary_base text-2xl'><BsFillCheckSquareFill /></p>}
        </div>
      </div>
    </Bounce>
  )
}

export const CartCard = ({
  id, 
  img,
  name, 
  title, 
  price,
  description
}) => {
  return (
    <Bounce bottom key={id}>
      <div key={id} className='text-white my-2 p-2 w-full max-h-[50px] rounded-lg bg-primary_light flex justify-between'>
        <div className='flex space-x-2 w-[80%] h-full'>
          <div className='w-[20%] h-fit'>
            <Image alt={name || title || "product"} src={img || fallback} className="w-full min-h-[30px] max-h-[40px] rounded-lg img-fluid" />
          </div>
          <div className=''>
            <p className='text-xs font-normal text-white capitalize'>{name || title || "Product"}</p>
            <p className='text-xs font-normal text-primary_base m-0'>{description || "description"}</p>
          </div>
        </div>
        <div className='pt-3'>
          <p className='text-xs font-normal'>${Number(price || 0).toFixed(2)}</p>
        </div>
      </div>
    </Bounce>
  )
}

export default ListCard