import { useState } from "react";

import SearchBar from "./searchBar";
import Products from "./Products";

import "./App.css"

function App() {

  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Mobile Phone",
    "Headphones",
    "Smart Watch",
    "Laptop Bag",
    "Keyboard",
    "Mouse",
    "Power Bank"
  ];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>🛍️ ShopZone</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Products
        products={filteredProducts}
      />

    </div>
  );
}

export default App;