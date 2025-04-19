import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts() {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      const data = response.data;
      console.log(data);
      setProducts(data);
    }
    fetchproducts();
  }, []);

  return (
    <Container>
      <br />
      <h1>The Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Img
                variant="top"
                src={`http://localhost:8000${product.image}`}
                alt={product.product_name}
              />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>₹{product.price}</Card.Text>
                <Card.Text>{product.productcategory}</Card.Text>
                <Card.Text>{product.productinfo}</Card.Text>
                <Card.Text>{product.stockcount}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
