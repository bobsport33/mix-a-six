import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.totalBeers;
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}></div>
        <ul className={classes.links}>
          <li className={classes.link} onClick={props.onShowCart}>
            Cart <span className={classes.badge}>{numberOfCartItems}</span>
          </li>
        </ul>
      </nav>
      <h1 className={classes.title}>Mix-a-six</h1>
      <h2 className={classes.subtitle}>Create your own six pack</h2>
      <h2 className={classes.subtitle}>have it delivered to your door</h2>
      <p></p>
    </header>
  );
};

export default Header;
