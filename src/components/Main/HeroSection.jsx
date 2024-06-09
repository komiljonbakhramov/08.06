import React, { useState, useEffect } from "react";
import { FetchProducts } from "../Api/Api";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState("");
  const [productTitle, setProductTitle] = useState("");

  useEffect(() => {
    const getRandomProductImage = async () => {
      try {
        const products = await FetchProducts();
        if (products.length > 0) {
          const randomProduct =
            products[Math.floor(Math.random() * products.length)];
          console.log("Random product selected:", randomProduct);
          setBgImage(randomProduct.image);
          setProductTitle(randomProduct.title);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getRandomProductImage();
  }, []);

  useEffect(() => {
    console.log("Background Image URL:", bgImage);
    console.log("Product Description:", productTitle);
  }, [bgImage, productTitle]);

  return (
    <div
      className="heroSection"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    >
      <div className="heroContent">
        <h2>
          {productTitle ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </h2>
        <button type="button">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
