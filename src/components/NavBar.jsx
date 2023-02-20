import React from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";

function NavBar({cartNum}) {

  //const cartNum=0;

  return (
    <div className='navBar'>
        <a href='/'>My Store</a>
        <a href="/cart" className="cart-items">
            <BsFillCartPlusFill/>
            <p className="cart-num">{cartNum}</p>
        </a>
    </div>
  )
}

export default NavBar