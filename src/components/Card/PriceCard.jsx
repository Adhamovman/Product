import React, { Component } from "react";
import MainBtn from "../Button/MainBtn";

export class PriceCard extends Component {
  render() {
    const { price, plan_name, desc, plan_func1, plan_func2, plan_func3 } =
      this.props;
    return (
      <div className="price-card">
        <h3>{plan_name}</h3>
        <p className="card-desc">{desc}</p>
        <div className="cost">
          <div className="num text-price">
            <h2>{price}</h2>
          </div>
          <div className="cost-text">
            <p
              className="text-price"
              style={{ textAlign: "start", fontSize: "24px" , fontWeight: "700"}}
            >
              $
            </p>
            <p>Per / month</p>
          </div>
        </div>
        <p className="card-func">{plan_func1}</p>
        <p className="card-func">{plan_func2}</p>
        <p className="card-func">{plan_func3}</p>
        <MainBtn>Order Now</MainBtn>
      </div>
    );
  }
}

export default PriceCard;
