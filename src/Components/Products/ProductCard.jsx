import {useContext, useState} from 'react'
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating"
import CurrencyFormatter from '../CurrencyFormat/CurrencyFormat';





 function ProductCard({product}) {
    const { image, title, rating, price, id} = product;
    // const [state, dispatch] = useContext(DataContext);
    // const addToCart = () => {
    //   dispatch({ type: "ADD_TO_BASKET", item: product });
    // };
    // console.log(state.basket);

  return (
    <div className={`${classes.card__container}`}>
      <a>
        <img src={image} alt="" className={classes.img_container} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormatter value={price} />
        </div>
        <button className={classes.button}>
          add to cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
