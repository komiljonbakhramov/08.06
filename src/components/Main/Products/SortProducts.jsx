import React, { useState, useEffect } from "react";
import { FetchProducts } from "../../Api/Api";

const SortProducts = () => {
  const [products, setProducts] = useState([]);
  const [headphonesType, setHeadphonesType] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await FetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProductData();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (headphonesType === "" || product.headphonesType === headphonesType) &&
      (price === "" || product.price === price) &&
      (material === "" || product.material === material) &&
      (color === "" || product.color === color)
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "priceAsc") {
      return a.price - b.price;
    } else if (sortBy === "priceDesc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <section className="sortProducts">
      <div className="filters">
        <div className="filter1">
          <select
            name="headphonesType"
            id="headphonesType"
            value={headphonesType}
            onChange={(e) => setHeadphonesType(e.target.value)}
          >
            <option value="">Headphone Types</option>
            <option value="over-ear">Over-Ear</option>
            <option value="in-ear">In-Ear</option>
            <option value="on-ear">On-Ear</option>
          </select>
        </div>
        <div className="filter2">
          <select
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Price</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="filter3">
          <select
            name="material"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option value="">Material</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="leather">Leather</option>
          </select>
        </div>
        <div className="filter4">
          <select
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
          </select>
        </div>
        <div className="filter5">
          <button type="button">All filters</button>
        </div>
      </div>

      <div className="sort">
        <select
          name="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card"></div>
        ))}
      </div> */}
    </section>
  );
};

export default SortProducts;
