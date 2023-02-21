import React from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function OneProduct({ product, onAdd, inCart }) {
  //console.log(props);

  // function onAdd(title){
  //   console.log("Dodat proizvod: "+title);
  // }

  return (
    <div
      className={inCart === 1 ? "card" : "card-cart"}
      style={{ margin: 10, borderStyle: "dotted" }}
    >
      <img
        className={inCart === 1 ? "card-img-top" : "card-img-left"}
        src="https:/picsum.photos/200"
        alt="NEka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>

      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
        </>
      ) : (
        <>
          <h4>Amount: {product.amount}</h4>
        </>
      )}
    </div>
  );
}

export default OneProduct;
