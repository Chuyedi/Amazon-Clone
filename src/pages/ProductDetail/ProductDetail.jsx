import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../Components/Products/ProductCard";
import Spinner from "../../Components/Loader/Spinner";
import Layout from "../../Components/Layout/Layout";

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)
    };

    getProduct();
  }, []);
  return (
    <Layout>{isLoading ? <Spinner /> : <ProductCard product={product} flag />}</Layout>
  );
}
export default ProductDetail;
