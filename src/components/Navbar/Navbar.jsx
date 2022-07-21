import "./index.css";
import Button from "../Button";
import { useState } from "react";

const Navbar = ({ action }) => {
    console.log(action)
  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <Button onHandleClick={action} btnTextCont="Show / hide" />
    </div>
  );
};
export default Navbar;
