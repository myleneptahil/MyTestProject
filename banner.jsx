import React, { Component } from "react";
import OnlineShopping from "./onlineshopping.png";

class Banner extends Component {
  state = {
    products: ["Cable", "House And Lot", "Condominium", "Lot Only"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.products.length === 0) return <p>There are no products!</p>;
    return (
      <ul>
        {this.state.products.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <img src={OnlineShopping} alt="Online Shopping" />
        <span style={this.styles}> AFFORD SHOP</span>

        <p>Product List</p>
        {this.state.products.length === 0 && "Please create a new product!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Banner;
