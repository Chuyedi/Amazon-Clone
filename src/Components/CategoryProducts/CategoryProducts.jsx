import { useEffect, useState } from "react";
import classes from "./CategoryProducts.module.css";
import { useParams } from "react-router";
const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();
  useEffect(() => {
    const getCategoryProducts = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        const data = await response.json();
        setProducts(data);
    }

    getCategoryProducts();
  }, []);


  console.log(products);
  return (
    <section>
<br />
<hr />
      <h3>Products</h3>
      <br />
      {
        products.map((product) => {
            return <img width="20%" src={product.image}/>
        })
      }
    </section>
  );
};

export default CategoryProducts;
