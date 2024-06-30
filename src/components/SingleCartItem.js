import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleCartItem = ({ product }) => {
  const handleDeleteFromCart = () => {
    // Placeholder for delete functionality
    console.log('Delete from cart:', product.name);
  };

  const handleProceed = () => {
    // Implement proceed functionality
    console.log('Proceed with:', product.name);
  };

  return (
    <Card sx={{ display: 'flex', marginBottom: 4, padding: 4, borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 120 }}>
        <img src={product.imageUrl} alt={product.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '50%' }} />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2 }}>
        <CardContent sx={{ paddingBottom: '16px !important' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 16px 0' }}>
          <IconButton aria-label="delete" onClick={handleDeleteFromCart} color="error">
            <DeleteIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={handleProceed}>
            Proceed
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default SingleCartItem;
