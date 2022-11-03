import React from 'react'
import { Route, Routes } from 'react-router'
import BookPage from './components/book'
import SuccessPage from './components/display/success'

function Booking() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<BookPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </div>
  )
}

export default Booking