import React, { useState } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, ListItemIcon, Checkbox, Button } from '@mui/material';

const CategoriesCard = ({ categories, maxCategories = 5, seeAllText = 'See all categories' }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (event, category) => {
    const newSelectedCategories = [...selectedCategories];
    if (event.target.checked) {
      newSelectedCategories.push(category);
    } else {
      const index = newSelectedCategories.indexOf(category);
      newSelectedCategories.splice(index, 1);
    }
    setSelectedCategories(newSelectedCategories);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedCategories = showAll ? categories : categories.slice(0, maxCategories);

  return (
    <Card sx={{paddingTop:"10px", marginTop:"7px", boxShadow:10}}>
      <CardContent>
        <h2>Categories</h2>
        <List dense>
          {displayedCategories.map((category) => (
            <ListItem key={category} button onClick={(event) => handleCategoryChange(event, category)}>
              <ListItemIcon>
                <Checkbox edge="start" checked={selectedCategories.includes(category)} />
              </ListItemIcon>
              <ListItemText primary={category.title} />
            </ListItem>
          ))}
        </List>
        {categories.length > maxCategories && (
          <Button variant="text" size="small" color="primary" onClick={handleShowAll}>
            {showAll ? 'Show less' : seeAllText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
