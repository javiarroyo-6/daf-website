import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Products() {
  const products = [
    "Air Inlets",
    "Auxiliary Power Units",
    "Bails",
    "Body Assemblies",
    "Brackets",
    "Cabin Presure Control Systems",
    "Carrier Assemblies",
    "Chambers",
    "Cover Assemblies",
    "Covers",
    "Diffusers",
    "Electrial Systems",
    "End Bells",
    "Fans",
    "Flappers",
    "Fuel Controls",
    "Fuel Pump",
    "Gear Box Housings",
    "Housings",
    "Hydraulic Systems",
    "Impellers",
    "Liners",
    "Manifolds",
    "Next Higher Assembly",
    "Nozzles",
    "Pneumatic Systems",
    "Poppets",
  ];

  return (
    <>
      <h1 className="products" style={{ height: 200 }}>
        PRODUCTS
      </h1>
      <div style={{ paddingLeft: 100 }}>
        <h2>
          Diversified Engineering has demonstrated expertise in manufacturing a
          wide range of products from a diverse range of{" "}
          <a href="#footer">materials</a>
          <br />
        </h2>
        <h2 style={{ paddingTop: 30 }}>
          Product types include the following:{" "}
        </h2>
        <div style={{ paddingLeft: 100 }}>
          <ul style={{ margin: 20 }}>
            {products.map((name, index) => (
              <li id={index} style={{ paddingTop: 10 }}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer id="footer" />
    </>
  );
}
