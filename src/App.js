import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import { useState } from 'react';
import { Cart } from './components/Cart';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {

 // let cartNum=0;
  // const [first, setfirst] = useState(second);
  const [cartNum, setCartNum]=useState(0);
  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];

  function addProduct(title){
    console.log("Dodat je proizvod: "+title);
    
    console.log(cartNum);
    setCartNum(cartNum+1);
  }

  return (
    <BrowserRouter className="App">

      <NavBar cartNum={cartNum}></NavBar>

      <Routes>
        <Route path='/' element={<Products products={products} onAdd={addProduct}/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
      

    </BrowserRouter>
  );
}

export default App;
