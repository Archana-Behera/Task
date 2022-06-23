import React from "react";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

const Header = (props) => {
  return (
    <div className="header">
      <div style={{ float: "right", display: "flex", flexDirection: "row" }}>
        <Link href="/cart">
          <h3 style={{ color: "white", textAllign: "right" }}>
            shopping cart
            <CgShoppingCart style={{ width: "100px", height: "50px" }} />
          </h3>
        </Link>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "100%",
            marginTop: "10px",
            marginLeft: "190px",
            position: "absolute"
          }}
        >
          <h3 style={{ color: "black", margin: "12px", bottom: "-7px", position: "absolute" }}>
            {props.cartlist && props.cartlist.cart && props.cartlist.cart.length}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Header;
