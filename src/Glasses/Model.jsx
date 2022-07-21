import React from "react";

const Model = ({ product }) => {
  return (
    <div className="col-sm-6 ">
      <div className="mx-auto img-contain position-relative ">
        <img
          src="./glassesImage/model.jpg"
          alt="model"
          width="100%"
          height="100%"
        />
        <img
          className="img-glasses"
          src={product.url}
          alt="glasses"
          width="165px"
        />
      </div>
    </div>
  );
};

export default Model;
