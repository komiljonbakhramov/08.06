// * This files name must be OtherComponents.jsx but I named shortly OtherCompos.jsx

import React, { useState } from "react";

const OtherCompos = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="otherComponents">
      <label htmlFor="productSearch">
        <input
          type="text"
          name="productSearch"
          id="productSearch"
          placeholder="Search Products"
          value={text}
          onChange={handleInputChange}
        />
        <i className="pi pi-search" onClick={() => setText("")}></i>
      </label>

      <a href="#profile" className="profile">
        <i className="pi pi-user"></i>
        Account
      </a>

      <a href="#cart" className="cart">
        <i className="pi pi-shopping-cart"></i>
        Cart
      </a>
    </div>
  );
};

export default OtherCompos;
