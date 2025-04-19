import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
function Product({ product }) {
  console.log(product);
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={`http://localhost:8000${product.image}`} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-dark">
          <Card.Title as="h3">
            {product.product_name}
          </Card.Title>
        </Link>

        <Card.Text as="div">
            <div className="my-3">
                {product.rating} from {product.numReviews} reviews
            </div>
        </Card.Text>

        <Card.Text as="h3">
            {product.price} Rs
        </Card.Text>

        <Rating
            value={product.rating}
            text= {`${product.numReviews} reviews`}
            color={"#f8e825"}

        />
      </Card.Body>
    </Card>
  );
}

export default Product;
