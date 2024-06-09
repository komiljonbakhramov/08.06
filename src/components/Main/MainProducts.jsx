import React from "react";
import HeroSection from "./HeroSection";
import SortProducts from "./Products/SortProducts";
import ProductsCard from "./Products/ProductCard";

const Products = () => {
  return (
    <main>
      <HeroSection />
      <SortProducts />
      <ProductsCard />
    </main>
  );
};

export default Products;
