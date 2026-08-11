function ProductDetails({ product }) {
  return (
    <div className="product-details">

      <h1>Product Details</h1>

      <div className="details-card">

        <div className="details-image">
          {product.image}
        </div>

        <div className="details-content">

          <h2>{product.name}</h2>

          <h3>{product.price}</h3>

          <p>
            {product.description}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <button>
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;