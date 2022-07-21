import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className=" col-md-6 ">
      <div className="mx-auto img-contain position-relative ">
        <img
          src="./glassesImage/model.jpg"
          alt="model"
          width="100%"
          height="100%"
        />
        <img
          className="img-glasses"
          src="./glassesImage/v1.png"
          alt="glasses"
          width="165px"
        />
        <div className="info  p-2 text-white">
          <h4 className="text-primary fs-5 mb-1">{product.name}</h4>
          <p className="my-1 fs-5">$ {product.price}</p>
          <p className="fs-6 lh-sm mb-0">{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
