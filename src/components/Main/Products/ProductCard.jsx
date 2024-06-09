import React, { useState, useEffect } from "react";
import { FetchProducts } from "../../Api/Api";
import StarRating from "./ProductStars";
import AddToCartBtn from "./AddToCard";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await FetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="mainProductContainer">
      <h4>Headphones For You!</h4>
      <div className="ProductsContainer">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <strong>${product.price}</strong>
            <p>{product.description}</p>
            <StarRating rating={product.rating} />

            <AddToCartBtn />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
