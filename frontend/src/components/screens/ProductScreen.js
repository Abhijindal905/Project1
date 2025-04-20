import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Container,
  ListGroupItem,
  Button
} from "react-bootstrap";
function ProductScreen({ params }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchproducts() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/product/${id}`
      );
      const data = response.data;
      console.log(data);
      setProduct(data);
    }
    fetchproducts();
  }, []);
  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>

        <Row>
          <Col md={6}>
            <Image
              src={`http://localhost:8000${product.image}`}
              fluid
            />
          </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 style={{ color: "black" }}>{product.product_name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.productinfo}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price} Rs</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
            <ListGroup.Item>
                <Button className='btn-block btn-success' disabled={product.stockcount==0} type='button'>Add to Cart</Button>

            </ListGroup.Item>


            </ListGroup>
          </Card>
        </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductScreen;
