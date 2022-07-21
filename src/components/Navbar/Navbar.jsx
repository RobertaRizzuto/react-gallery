import "./index.css";
import Button from "../Button";


const Navbar = ({ action, condition }) => {
    console.log(action)
  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <Button onHandleClick={action} btnTextCont={condition ? "hide" : "show"}/>
    </div>
  );
};
export default Navbar;
