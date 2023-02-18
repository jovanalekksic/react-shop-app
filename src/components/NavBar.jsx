import React from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";

function NavBar() {
  return (
    <div className='navBar'>
        <a>My Store</a>
        <div className="cart-items">
            <BsFillCartPlusFill/>
            <p className="cart-num">0</p>
        </div>
    </div>
  )
}

export default NavBar