import React from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";

function NavBar({cartNum}) {

  //const cartNum=0;

  return (
    <div className='navBar'>
        <a>My Store</a>
        <div className="cart-items">
            <BsFillCartPlusFill/>
            <p className="cart-num">{cartNum}</p>
        </div>
    </div>
  )
}

export default NavBar