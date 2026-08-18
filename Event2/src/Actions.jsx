import { buyProduct,addToCart,showDetails } from "./funcions";

function Actions() {

  return (
    <div className="actions">

      <h1>Product Actions</h1>

      <button onClick={buyProduct}>
        Buy Now
      </button>

      <button onClick={addToCart}>
        Add To Cart
      </button>

      <button onClick={showDetails}>
        Product Details
      </button>

    </div>
  );
}

export default Actions;