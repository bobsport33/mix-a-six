import classes from "./Products.module.css";
import ProductCard from "./Product-Card";
import ProductsData from "./Products-Data";

const EXAMPLE_BEERS = ProductsData();

const Products = () => {
  return (
    <section className={classes.products}>
      <h3 className={classes.products__heading}>Available Beers</h3>
      <p className={classes.products__description}>
        You pick the beers, we deliver them to your door. Add beers to your cart
        to create a customized six-pack.
      </p>
      <ul className={classes.list}>
        {EXAMPLE_BEERS.map((beer) => {
          return (
            <ProductCard
              brewery={beer.brewery}
              name={beer.name}
              amount={beer.amount}
              id={beer.id}
              img={beer.img}
              style={beer.style}
              description={beer.description}
              price={beer.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
