import React from 'react';
import { Grid } from '@mui/material';
import SingleProduct from './SingleProduct';

const ProductCard = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id}>
          {/* Use breakpoints to adjust the number of products per row */}
          <SingleProduct product={product} xs={12} sm={6} md={4} lg={3} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
