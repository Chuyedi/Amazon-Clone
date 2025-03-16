import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard"
import classes from "./Results.module.css"
import Layout from "../../Components/Layout/Layout";

function Results() {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoryProduct = async () => {
      try {
        const response = await axios.get(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      setProducts(response.data);
    }
       catch (error) {
        console.log(error);
      }
    };
    getCategoryProduct();
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
export default Results;
