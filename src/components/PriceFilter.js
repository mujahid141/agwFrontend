import React, { useState } from 'react';
import './PriceFilter.css'; // Import the CSS file

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Adjust default values as needed

  const handleMinChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement your logic here to filter products based on minPrice and maxPrice
    console.log(`Filtering products with price between ${minPrice} and ${maxPrice}`);
  };

  return (
    <div className="price-filter">
      <h2>Price Filter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="minPrice">Minimum Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinChange}
          min="0" // Set minimum price
        />

        <label htmlFor="maxPrice">Maximum Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxChange}
          min="0" // Set minimum price
        />

        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default PriceFilter;
