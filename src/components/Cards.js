import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <p
        style={{
          textAlign: "center",
          fontSize: 40,
        }}
      >
        We are a newly formed deburring company with over 15 years of working
        experience in the industry.
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: 25,
        }}
      >
        Our strong commitment to quality, on-time delivery, and customer
        satisfaction are pillars to our success.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/facility.jpeg"
              text="State-Of-The-Art Facility"
              path="/products"
            />
            <CardItem
              src="images/precision.jpeg"
              text="Precision Engineered"
              path="/products"
            />
            <CardItem
              src="images/premiumParts.jpeg"
              text="Premium Quality Products"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
