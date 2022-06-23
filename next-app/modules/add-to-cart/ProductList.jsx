import React from "react";
import Image from "next/image";

const ProductList = (props) => {
  const handleCart = (id) => {
    let b = { id: id };
    let value = props.productlist.cart.findIndex((product) => product.id === b.id);
    if (value < 0) {
      props.handleAddtoCart(id);
    } else {
      alert("item already presentin the cart");
    }
  };

  return (
    <div style={{ width: "100vw" }}>
      {props.productlist && props.productlist.product && props.productlist.product.length
        ? props.productlist.product.map((products) => {
            return (
              <div>
                <div key={products.id} className="card">
                  <Image src={products.image} alt="Picture of the author" width={200} height={150} />
                  <h2 style={{ fontFamily: "Georgia, serif" }}>{products.category}</h2>
                  <p>{products.description}</p>
                  <p style={{ fontWeight: "bold" }}>
                    price:<span style={{ backgroundColor: "yellow" }}>{products.price}</span>
                  </p>
                  <button className="btn" onClick={() => handleCart(products.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default ProductList;
