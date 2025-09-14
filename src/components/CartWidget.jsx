import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export const CartWidget = () => {
  return (

      <NavLink to="/cart">
        <button className="btnCartWidget">
        <img
          src="https://images.icon-icons.com/1138/PNG/512/1486395300-03-trolley_80567.png"
          height={70}
          width={70}
        />
        </button>
      </NavLink>
  );
};