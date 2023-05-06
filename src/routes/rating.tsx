import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Rating from '../pages/Ratings/index'
import GetCurrentUser from '../hooks/getCurrentUser'

export default function RatingRouter() {
  const currentUser = GetCurrentUser()
  return (
    <Routes>
      <Route path="/rating" element={<Rating />} />
    </Routes>
  )
}
