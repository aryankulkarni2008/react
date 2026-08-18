function Products({ products }) {

  return (
    <div>

      {products.map((product, index) => (
        <div key={index}>

          <h2>{product}</h2>

          <button>
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}

export default Products;