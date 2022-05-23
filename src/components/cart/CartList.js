import { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartList.module.css";

const CartList = () => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <li className={classes.item}>
            <div>
              <h5>
                {item.brewery} {item.name}
              </h5>
              <img className={classes.img} alt={item.name} src={item.img}></img>
            </div>

            <div className={classes.quantities}>
              <p>Quantity: {item.amount}</p>
              <p>${item.price} each</p>
              <h6>Total: {(item.price * item.amount).toFixed(2)}</h6>
              <button
                className={classes.cartBtn}
                onClick={addItemHandler.bind(null, item)}
              >
                +
              </button>
              <button
                className={classes.cartBtn}
                onClick={removeItemHandler.bind(null, item.id)}
              >
                -
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
