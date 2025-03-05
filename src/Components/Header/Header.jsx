import React from 'react'
import classes from "../Header/Header.module.css"
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerHeade from './LowerHeade';

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/** Logo */}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon-logo"
              />
            </a>
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
            <FaSearch />
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
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/** Orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/** Cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeade/>
    </>
  );
}
export default  Header;
