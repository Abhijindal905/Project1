import { useEffect, useState } from "react";
import { fetchProducts } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <img src={product.image} alt={product.name} width="100" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
