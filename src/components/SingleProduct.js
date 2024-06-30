import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const handleAddToCart = (product) => {
  console.log('Adding product to cart:', product);
};

const SingleProduct = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product?.isLiked || false);

  const handleAddToWishlist = () => {
    setIsLiked(!isLiked);
    console.log('Wishlist updated:', product, localStorage.getItem('name'));
  };

  if (!product) {
    return <div>Loading...</div>; // Or handle this case in a way that fits your application
  }

  const imageUrl = product.images && product.images[0] ? 'http://127.0.0.1:8000/' + product.images[0].image : '';

  return (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      '&:hover': { backgroundColor: 'lightgray' },
    }}>
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={product.title}
          sx={{
            width: '100%',
            maxWidth: 300,
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.primary">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button
          onClick={() => console.log('Details')}
          variant="contained"
          size="small"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Details
        </Button>
      </CardContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <IconButton
          aria-label="Add to cart"
          sx={{ position: 'relative' }}
          onClick={() => handleAddToCart(product)}
        >
          <AddShoppingCartIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          sx={{ position: 'relative' }}
          onClick={handleAddToWishlist}
        >
          {isLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default SingleProduct;
