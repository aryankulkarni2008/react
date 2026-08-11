import { useState } from "react";
import Products from "./Products";

function Hero() {
  const [showProducts, setshowProducts] = useState(false);

  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            ✨ New Collection 2026
          </p>

          <h1>
            Discover Products
            <br />
            You'll Love
          </h1>

          <p className="description">
            Find amazing products at the best prices.
            Shop quality products with confidence.
          </p>

          <button
            className="shop-button"
            onClick={() => setshowProducts(true)}
          >
            Shop Now
          </button>

        </div>

        <div className="hero-image">
          🛍️
        </div>

      </section>

      {showProducts && <Products />}

    </>
  );
}

export default Hero;