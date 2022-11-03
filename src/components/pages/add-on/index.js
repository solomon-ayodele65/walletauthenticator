import { Col, Empty, Row } from 'antd'
import React from 'react'
import ListCard from '../card'

function AddOnTab({data}) {
  return (
    <div className='w-full h-full'>
      {data?.length ? (
        <Row gutter={[16, 16]}>
          {data?.map((n)=>(
            <Col span={12} md={6} key={n.id}>
              <ListCard data={n} />
            </Col>
          ))}
        </Row>
        ) : (
          <Empty 
            title="No available seat"
            description="Choose another date"
          />
      )}
    </div>
  )
}

export default AddOnTab