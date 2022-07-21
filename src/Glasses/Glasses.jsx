import React, { Component } from "react";
import data from "./data.json";
import "./Glasses.css";
import Header from "./Header";
import Info from "./Info";
import ProductList from "./ProductList";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      productItem: data[0],
    };
  }

  handleSelect = (product) => {
    this.setState({ productItem: product, isOpen: false });
    setTimeout(() => {
      this.setState({ isOpen: true, productItem: product });
    }, 30);
  };

  render() {
    const { isOpen, productItem } = this.state;
    return (
      <div className="main">
        <div className="background"></div>
        <Header />
        <Info product={productItem} isOpen={isOpen} />
        <ProductList products={data} onSelect={this.handleSelect} />
      </div>
    );
  }
}
