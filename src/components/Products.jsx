import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products}) => {

  
  return (
    <div className='all-products'>

      {products.map(  (prod) => <OneProduct product={prod}/> )}

        {/* <OneProduct product={products[0]}/>
        <OneProduct product={products[1]}/>
        <OneProduct product={products[2]}/> */}
        
      
    </div>
  )
}

export default Products