import React from "react";
import ProductList from "./ProductList";
import Header from "./Header";

const Page = (props) => {
  return (
    <div>
      <Header cartlist={props.product} />
      <ProductList productlist={props.product && props.product} handleAddtoCart={props.handleAddtoCart} />
    </div>
  );
};
export default Page;
