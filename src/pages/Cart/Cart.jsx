import React from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { DataContext } from "../../Components/Context/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormatter from "../../Components/CurrencyFormat/CurrencyFormat";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Layout from "../../Components/Layout/Layout";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  let total = basket?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increment = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <Layout>
      <section
        className={`${classes.container} ${
          basket.length === 0 ? classes.no_item : ""
        }`}
      >
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {/* item */}
          {basket.length === 0 ? (
            <p>OOPS!!! No item in the basket</p>
          ) : (
            basket.map((item) => (
              <section key={item.id} className={classes.cart_product}>
                <ProductCard product={item} flag cart />

                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div className="">
              <p>Subtotal {basket.length} items</p>
              {/* total amount */}
              <CurrencyFormatter amount={total} />
            </div>
            <span className="">
              <input type="checkbox" />
              <small>This order include gifts</small>
            </span>
            <Link to="/payment">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}
export default Cart;
