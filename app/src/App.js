import React from "react";
import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div className="row">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products?.map((product, key) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
