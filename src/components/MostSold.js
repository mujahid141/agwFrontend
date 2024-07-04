import React from 'react'
import { Card, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListItemSecondaryAction, Typography, Badge } from '@mui/material';

const MostSold = ({products}) => {
  return (
    <Card  sx={{paddingTop:"10px", marginTop:"7px", boxShadow:10 }}>
      <CardContent>
        <h2>Most Sold Products</h2>
        <List dense>
          {products.map((product) => (
            <ListItem key={product.id} button sx={{ '&:hover': { backgroundColor: 'lightgray' } }}>
              <ListItemIcon>
              <img src={product.images && product.images[0]? 'http://127.0.0.1:8000/'+product.images[0].image : ''} alt={product.name} width={70} height={70} />
              </ListItemIcon>
              <ListItemText
                primary={product.title}
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
      </CardContent>
    </Card>
  );
};

export default MostSold;

