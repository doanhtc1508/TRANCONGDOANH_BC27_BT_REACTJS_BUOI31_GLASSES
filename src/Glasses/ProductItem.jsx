import React from "react";

const ProductItem = ({ product, onSelect }) => {
  return (
    <div className="col-md-2 py-3 text-center">
      <img
        src={product.url}
        alt=""
        width="150px"
        height="60px"
        className="border border-1 border-dark p-1 pointer"
        onClick={() => onSelect(product)}
      />
    </div>
  );
};

export default ProductItem;
