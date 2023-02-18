import React from 'react'
import {BsPlusLg,BsDashLg} from "react-icons/bs";

function OneProduct() {
  return (
    <div className='card'style={{margin:10, borderStyle:'dotted'}}>
        <img className='card-img-top' src='https:/picsum.photos/200' alt='NEka slika'/>
        <div className="card-body">
            <h3 className="card-title">Product name</h3>
            <p className="card-text">This is description of the product.</p>
        </div>
        <button className='btn'><BsPlusLg/></button>
        <button className='btn'><BsDashLg/></button>
    </div>
  )
}

export default OneProduct