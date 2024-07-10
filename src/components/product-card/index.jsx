import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-1 flex flex-col items-center justify-center py-4">
      <img
        src={product.image}
        alt={product.name}
        className=" lg:max-w-[376px] lg:max-h-[371px] object-cover rounded-md "
      />
      <div className="pt-4 pb-2">
        <h4 className="text-lg font-medium text-gray-900 ">{product.name}</h4>
        <p className="text-gray-700 text-base text-center whitespace-nowrap">
          ${product.price}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="px-4 py-2 text-sm font-medium text-white bg-black uppercase hover:bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
