import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const WishList = () => {
  const wishlist = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    // ... add more products here
  ];

  const handleRemove = (id) => {
    // Handle the remove logic here
    console.log(`Remove product with id: ${id}`);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Wish List
      </Typography>
      <List>
        {wishlist.map((product) => (
          <StyledListItem key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price}`}
            />
            <Button
              style={{padding:'8px', margin:'6px'}}
              variant="contained"
              color="secondary"
              onClick={() => handleRemove(product.id)}
            >
              Proceed Order
            </Button>
            <Button
            style={{padding:'8px', margin:'6px'}}
              variant="contained"
              color="secondary"
              onClick={() => handleRemove(product.id)}
            >
              Remove from Wishlist
            </Button>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default WishList;
