import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onSelect }) => {
  return (
    <div className="row py-4 bg-white w-75 mx-auto mt-5">
      {products.map((product) => {
        return (
          <ProductItem key={product.id} product={product} onSelect={onSelect} />
        );
      })}
    </div>
  );
};

export default ProductList;
