import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <h5>
          {props.brewery} {props.name}
        </h5>
        <img className={classes.img} alt={props.name} src={props.img}></img>
      </div>

      <div className={classes.quantities}>
        <p>Quantity: {props.amount}</p>
        <p>${props.price} each</p>
        <h6>Total: {(props.price * props.amount).toFixed(2)}</h6>
        <button className={classes.cartBtn} onClick={props.onAdd}>
          +
        </button>
        <button className={classes.cartBtn} onClick={props.onRemove}>
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
