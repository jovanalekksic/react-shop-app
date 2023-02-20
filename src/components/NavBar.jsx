import React from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";
import {Link} from "react-router-dom";

function NavBar({cartNum}) {

  //const cartNum=0;

  return (
    <div className='navBar'>
        <Link to='/'>My Store</Link>
        <Link to="/cart" className="cart-items">
            <BsFillCartPlusFill/>
            <p className="cart-num">{cartNum}</p>
        </Link>
    </div>
  )
}

export default NavBar