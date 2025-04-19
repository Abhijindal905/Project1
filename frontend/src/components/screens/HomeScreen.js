import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
function HomeScreen() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchproducts(){
      const response = await axios.get('http://127.0.0.1:8000/api/products/')
      const data = response.data
      console.log(data)
      setProducts(data)
    }
    fetchproducts()
  }, [])


  return (
    <Container>
      <br/>
      <h1>The Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.product_name}</h3>
            <h6>{product.price}</h6>
            <p>{product.category}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen