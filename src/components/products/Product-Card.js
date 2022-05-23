import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./Product-Card.module.css";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      brewery: props.brewery,
      name: props.name,
      amount: props.amount,
      img: props.img,
      description: props.description,
      style: props.style,
      price: props.price,
    });
  };

  return (
    <li>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <h4 className={classes.heading}>
            {props.brewery} {props.name}
          </h4>
          <img className={classes.img} src={props.img} alt={props.name}></img>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.info}>
            <p>Style: {props.style}</p>
            <p>Price: ${props.price.toFixed(2)}</p>
            <Button>Add</Button>
          </div>
        </form>
      </Card>
    </li>
  );
};
export default ProductCard;
