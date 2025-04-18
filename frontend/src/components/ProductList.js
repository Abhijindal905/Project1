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
    <div key={product.id} className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  ))}
</div>

  );
};

export default ProductList;
