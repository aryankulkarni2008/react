import {showLaptop, showPhone, showWatch} from "./funcions";
function Products() {

  return (
    <div className="products">

      <h1>Our Products</h1>


      <div className="product-card">

        <h2>💻 Laptop</h2>

        <p>Price: ₹50,000</p>

        <button onClick={showLaptop}>
          Select Laptop
        </button>

      </div>


      <div className="product-card">

        <h2>📱 Smartphone</h2>

        <p>Price: ₹25,000</p>

        <button onClick={showPhone}>
          Select Phone
        </button>

      </div>


      <div className="product-card">

        <h2>⌚ Smart Watch</h2>

        <p>Price: ₹3,500</p>

        <button onClick={showWatch}>
          Select Watch
        </button>

      </div>

    </div>
  );
}

export default Products;