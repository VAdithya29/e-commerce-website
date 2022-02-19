import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">Error</Message>
      ) : (
        <Row sm={12} md={8} lg={6} xl={4}>
          {products.map((product) => (
            <Col key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
