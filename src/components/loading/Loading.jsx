import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function () {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}
