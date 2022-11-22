/* eslint-disable react-hooks/exhaustive-deps */
import { Divider, Spin } from 'antd'
import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'
import { useBookedSection } from '../../../services/hooks/bookedSection'
import ListCard from '../card'
import Empty from '../empty'


function BookedSeatTab() {

  const {
    mutate: getBookedSection,
    isLoading,
    data,
  } = useBookedSection()

  useEffect(() => {getBookedSection()}, [])
  return (
    <Spin size="large" spinning={isLoading} wrapperClassName="w-100 h-full">
      <div className='w-full h-full py-3 px-4'>
        <Fade big>
          <div className='w-full'>
            <p className='text-base font-medium '>Booked Section(s)</p>
          </div>
        </Fade>
        <Divider className='bg-white' />
        {data?.length ? (
          <div className="row">
            {data?.map((n)=>(
              <div className="col-6 col-sm-4 col-md-3 my-2" key={n.id}>
                <ListCard 
                  id={n.id}
                  title={n.club || "Seat"}
                  description={`${n.numberOfPerson} Seaters`}
                  price={n.sectionPrice}
                />
              </div>
            ))}
          </div>
          ) : (
            <Empty 
              title="No booked section"
            />
        )}
      </div>
    </Spin>
  )
}

export default BookedSeatTab