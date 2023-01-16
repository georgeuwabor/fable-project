import "../Styles/Navbar.css";
import Logo from "../Asset/Logo.svg";
const Navbar = () => {
  return (
    <>
      <div id="nav_container">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <div id="sub_categories">
            <p>COLLETIONS</p>
            <p>CUSTOMIZER</p>
            <p>SALE</p>
          </div>
        </div>
        <div id="sub_categories">
          <p>ITEMS</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
