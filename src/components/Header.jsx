import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const mycart = useSelector((state) => state.mycart.cart);
  console.log(mycart);
  const cartLen = mycart.length;
  return (
    <>
      <div id="header">
        <span id="carticon"> {cartLen} </span>
        <FaShoppingCart className="space" />

        <GrUserAdmin className="space" />
        <FaSearch className="space" />
      </div>
    </>
  );
};
export default Header;
