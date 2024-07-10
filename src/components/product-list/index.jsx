import React from "react";
import ProductCard from "../product-card";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
