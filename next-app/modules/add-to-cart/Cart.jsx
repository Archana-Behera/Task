import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

import { BiArrowBack } from "react-icons/Bi";
import { FaPlus, FaMinus } from "react-icons/Fa";

const Cart = (props) => {
  const product = useSelector((state) => state.product);
  const value = product && product.count;

  return (
    <div>
      <Link href="/">
        <a>
          <BiArrowBack style={{ width: "100px", height: "50px", float: "right" }} />
        </a>
      </Link>
      {product && product.cart && product.cart.length
        ? product.cart.map((products) => {
            return (
              <div key={products.id} style={{ marginTop: "50px", padding: "10px", width: "95%", borderBottom: "1px solid black" }}>
                <Image src={products.image} alt="Picture of the author" width={200} height={200} />
                <h1 style={{ fontFamily: "Georgia, serif" }}>{products.category}</h1>
                <p>{products.description}</p>
                <p style={{ fontWeight: "bold" }}>
                  price: <span style={{ backgroundColor: "yellow" }}>{products.price * value}</span>
                </p>
                <div style={{ display: "inline-block" }}>
                  <button onClick={() => props.handleIncrement(products.id)}>
                    <FaPlus />
                  </button>
                  <span>{value}</span>
                  <button onClick={() => (value === 1 ? null : props.handleDecreamnet(products.id))}>
                    <FaMinus />
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="btn" style={{ marginTop: "30px" }} onClick={() => props.handleRemoveCart(products.id)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            );
          })
        : "no item added "}
    </div>
  );
};
export default Cart;
