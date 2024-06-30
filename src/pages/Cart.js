import React from 'react';
import SingleCartItem from '../components/SingleCartItem';

const Cart = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <SingleCartItem key={index} product={product} />
      ))}
    </div>
  );
};

export default Cart;
