import React from "react";
import OneProduct from "./OneProduct";

export const Cart = ({ products }) => {
  return (
    <div>
      <h3>This is your cart.</h3>
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
};
