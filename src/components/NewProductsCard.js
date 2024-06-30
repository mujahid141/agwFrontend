import React from 'react';
import { Card, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListItemSecondaryAction, Typography, Badge, Button } from '@mui/material';

const NewProductsCard = ({ products }) => {
  return (
    <Card  sx={{paddingTop:"10px", marginTop:"15px", boxShadow:10 }}>
      <CardContent>
        <h2>New Products</h2>
        <List dense>
          {products.map((product) => (
            <ListItem key={product.id} button sx={{ '&:hover': { backgroundColor: 'lightgray' } }}>
              <ListItemIcon>
                <img src={product.imageUrl} alt={product.name} width={70} height={70} />
              </ListItemIcon>
              <ListItemText
                primary={product.name}
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Badge badgeContent={product.badge} color={product.badgeColor || 'primary'}>
                  {/* Add custom action here (optional) */}
                </Badge>
              </ListItemSecondaryAction>
              
            </ListItem>
          ))}
        </List>
        <Button color='primary'>See All </Button>
      </CardContent>
    </Card>
  );
};

export default NewProductsCard;
