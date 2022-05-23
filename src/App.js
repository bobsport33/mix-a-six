import { useState } from "react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

 

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
