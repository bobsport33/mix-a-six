import { useContext, useEffect, useState } from "react";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartList from "./CartList";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [canCheckout, setCanCheckout] = useState(false);
  const [checkoutWasShown, setCheckoutWasShown] = useState(false);

  useEffect(() => {
    if (cartCtx.totalBeers === 0) {
      return;
    }
    if (cartCtx.totalBeers % 6 === 0) {
      setCanCheckout(true);
      setCheckoutWasShown(true);
    } else {
      setCanCheckout(false);
    }
  }, [cartCtx]);

  const checkoutHandler = () => {
    cartCtx.clearCart();
    props.onCloseCart();
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <h4 className={classes.cartHeader}>Shopping cart</h4>
      <CartList />
      <h4>Total Price: ${cartCtx.totalAmount.toFixed(2)}</h4>
      <h4>Number of Beers: {cartCtx.totalBeers}</h4>
      <div className={classes.checkout}>
        <Button className={classes.cartBtn} onClick={props.onCloseCart}>
          Close
        </Button>
        {canCheckout && <Button onClick={checkoutHandler}>Checkout</Button>}
        {!canCheckout && checkoutWasShown && (
          <p>(Can Checkout when six-pack is full)</p>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
