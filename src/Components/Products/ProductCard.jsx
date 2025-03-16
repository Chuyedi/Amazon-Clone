import {useContext, useState} from 'react'
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating"
import CurrencyFormatter from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router';
import { DataContext } from '../Context/DataProvider';





 function ProductCard({ product, flag, cart }) {
   const { image, title, rating, price, description, id } = product;
   const [state, dispatch] = useContext(DataContext);
   const addToCart = () => {
     dispatch({ type: "ADD_TO_BASKET", item: product });
   };
   console.log(state);

   return (
     <div className={`${classes.card__container} ${flag ? classes.product__flexed : ''}`}>
       <Link to={`product/${id}`}>
         <img src={image} alt="" className={classes.img_container} />
       </Link>
       <div>
         <h3>{title}</h3>
         {flag && <div style={{ maxWidth: "750px" }}>{description}</div>}
         <div className={classes?.rating}>
           <Rating value={rating?.rate} precision={0.1} />
           <small>{rating?.count}</small>
         </div>
         <div>
           <CurrencyFormatter amount={price} />
         </div>
        {!cart && <button className={classes.button} onClick={addToCart}>add to cart</button>
       }
       </div>
     </div>
   );
 }
export default ProductCard;
