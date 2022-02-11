import React from "react";
import products from "../products";
import { Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row sm={12} md={8} lg={6} xl={4}>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
