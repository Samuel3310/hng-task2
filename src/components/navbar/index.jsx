import React, { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../store/CartContext";
import CartItem from "../cart-item";
import { Link } from "react-router-dom";

const NavBar = ({ img }) => {
  const { cartItems, getCartTotal, addToCart, removeFromCart } =
    useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  const handleQuantityChange = (item, change) => {
    if (change === "increase") {
      addToCart(item);
    } else if (change === "decrease" && item.quantity > 1) {
      removeFromCart(item);
    }
  };

  return (
    <nav className="w-full bg-gray-50 flex items-center justify-between px-10 py-3 shadow-md  gap-4">
      <div className="flex items-center">
        <img src={img} alt="Brand logo" className="" />
      </div>

      <div className="hidden md:w-1/2 md:flex">
        <input
          type="search"
          placeholder="Search"
          className="px-4 py-2 w-full rounded-full border bg-slate-200 border-gray-200  focus:outline-none  "
        />
      </div>

      <div className="cursor-pointer relative">
        <Link to="/cart">
          {" "}
          <IoCartOutline size={24} />
        </Link>

        {cartItems.length > 0 && (
          <span className=" rounded-full absolute -top-4 right-0 text-red-600 flex justify-center items-center">
            {cartItems.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
