/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useAllDrinks } from '../../../services/hooks/drink'
import { useAllHookahs } from '../../../services/hooks/hookah'
import ListCard from '../card'
import Empty from '../empty'

function AddOnTab() {
  const [data, setData] = useState([])

  const {
    mutate: getAllDrinks,
    isLoading: drinkLoading,
    data: drinkData
  } = useAllDrinks()

  const {
    mutate: getAllHookahs,
    isLoading: hookahLoading,
    data: hookahData
  } = useAllHookahs ()

  useEffect(() => {getAllDrinks(); getAllHookahs()}, [])
  useMemo(() => {
    setData([
      ...(drinkData ? drinkData : []), 
      ...(hookahData ? hookahData : [])
    ])}
  , [drinkData, hookahData])
  return (
    <Spin size="large" spinning={drinkLoading || hookahLoading} wrapperClassName="w-100 h-full">
      <div className='w-full h-full py-3 px-4'>
        {data?.length ? (
          <div className='row'>
            {data?.map((n)=>(
              <div className="col-6 col-sm-4 col-md-3 my-2" key={n.id}>
                <ListCard 
                  id={n.id}
                  title={n.name || "Drink"}
                  description={`
                    ${n.quantity ? n.quantity : ""} 
                    ${n.flavour ? n.flavour : ""} 
                    ${n.description ? n.description : ""}
                  `}
                  price={n.sectionPrice || n.cost || n.prize}
                />
              </div>
            ))}
          </div>
          ) : (
            <Empty
              title="No available seat"
              description="Choose another date"
              icon
            />
        )}
      </div>
    </Spin>
  )
}

export default AddOnTab