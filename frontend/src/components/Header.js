import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <>
      <h1>Le Shop</h1>
      <Link to="/"> Home </Link>
      <Link to="/products" className="ProductLink">
        Products
      </Link>
      {/* <Link to="/cart" className="ProductLink">Cart</Link> */}
    </>
  );
};

export default Header;
