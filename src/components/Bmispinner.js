import React from 'react'
import { Spinner } from 'react-bootstrap'

function Bmispinner() {
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center'>
        <Spinner className='me-2' animation="grow" variant="danger" />
        <Spinner className='me-2' animation="grow" variant="info" />
    </div>
  )
}

export default Bmispinner