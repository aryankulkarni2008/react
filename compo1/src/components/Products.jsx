import { useState } from "react";
import ProductDetails from "./ProductDetails";

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Laptop",
      price: "₹50,000",
      category: "Electronics",
      description: "Powerful laptop for work, study and programming.",
      image: "💻"
    },

    {
      name: "Headphones",
      price: "₹2,000",
      category: "Electronics",
      description: "High quality wireless headphones with clear sound.",
      image: "🎧"
    },

    {
      name: "Smart Watch",
      price: "₹3,500",
      category: "Wearables",
      description: "Modern smart watch with useful smart features.",
      image: "⌚"
    }
  ];

  if (selectedProduct) {
    return (
      <ProductDetails product={selectedProduct} />
    );
  }

  return (
    <div className="products">

      <h1>Our Products</h1>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product.name}>

            <div className="product-image">
              {product.image}
            </div>

            <h2>{product.name}</h2>

            <p>{product.price}</p>

            <button
              onClick={() => setSelectedProduct(product)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;