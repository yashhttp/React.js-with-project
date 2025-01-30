import React from 'react'
import Price from './Price'

function Product() {
  return (
    <div className='Product text-center border  rounded-pill m-2 pt-3'>
      <p>Title</p>
      <p>Description</p>
      <Price/>
    </div>
  )
}

export default Product
