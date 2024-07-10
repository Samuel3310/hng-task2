import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const CartItem = () => {
  const { cartItems, getCartTotal, addToCart, removeFromCart } =
    useContext(CartContext);

  const handleQuantityChange = (item, change) => {
    if (change === "increase") {
      addToCart(item);
    } else if (change === "decrease" && item.quantity > 1) {
      removeFromCart(item);
    }
  };

  return (
    <div className="w-full relative min-h-screen overflow-y-scroll px-20 bg-white z-50">
      <div className="p-4">
        <h2>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div
            className="flex lg:flex-row flex-col
           gap-4"
          >
            <ul className="w-full md:basis-3/4 list-none flex flex-col gap-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="w-full flex items-center  py-2 px-4 border border-gray-200 rounded-lg"
                >
                  <div className="w-full flex items-center gap-16">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-md md:w-[200px] md:h-[200px]"
                    />
                    <div className="w-full flex gap-20">
                      <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <p>Size: Medium </p>
                        <p>Color: Red</p>
                        <p className="font-semibold">${item.price}</p>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div>Delete</div>

                        <div className="flex items-center">
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full mr-2"
                            onClick={() =>
                              handleQuantityChange(item, "decrease")
                            }
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full"
                            onClick={() =>
                              handleQuantityChange(item, "increase")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 ">
              <p className="font-bold">Order Summary</p>

              <div className=" flex items-center justify-between gap-10">
                <span className="font-semibold flex items-center justify-between gap-10">
                  Subtotal:
                </span>
                <span> &#8358;{getCartTotal()}</span>
              </div>

              <div className="font-semibold flex items-center justify-between gap-10">
                <span>Discount (30%):</span>
                <span className="text-red-600">
                  -&#8358;{Math.floor(getCartTotal() * 0.3)}
                </span>
              </div>
              <div className="border-b-2 border-b-black pb-3 flex items-center justify-between gap-10">
                <span> Delivery Fee:</span>
                <span> &#8358;2000</span>
              </div>

              <div className="font-semibold flex items-center justify-between gap-10">
                <span>Total =</span>
                <span>
                  {" "}
                  &#8358;
                  {Math.floor(getCartTotal() - getCartTotal() * 0.3 + 2000)}
                </span>
              </div>
              <Link
                to="/checkout"
                className="bg-slate-900 text-white py-2 px-4 rounded"
              >
                Go to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Close button for cart */}
      <Link
        className="absolute top-4 right-4 bg-gray-400 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full p-2"
        to="/"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CartItem;
