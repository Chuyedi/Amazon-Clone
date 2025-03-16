import React, { useContext } from 'react'
import classes from "../Header/Header.module.css"
import { Link } from 'react-router'
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerHeade from './LowerHeade';
import {DataContext} from "../Context/DataProvider"
import { auth } from '../../utils/firebase';



function Header() {
  
  const [{ basket, user}, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((accumulator, item) => {
    return item.quantity + accumulator;
  }, 0);
  console.log(user);
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          {/** Logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon-logo"
              />
            </Link>
            <div className={classes.delivery}>
              {/**Delivery */}
              <span>
                {/** Icon */}
                <CiLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Wexford</span>
              </div>
            </div>
          </div>
          {/** Search bar */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/** Icon */}
            <FaSearch size={38} />
          </div>
          {/** Right side link */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://img.icons8.com/?size=96&id=15532&format=png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/** three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/** Orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/** Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeade />
    </>
  );
}
export default  Header;
