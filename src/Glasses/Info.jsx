import React from "react";
import ProductDetail from "./ProductDetail";
import Model from "./Model";

const Info = ({ product }) => {
  return (
    <div className="row  text-center mt-5 ms-0">
      <ProductDetail product={product} />
      <Model product={product} />
    </div>
  );
};

export default Info;
