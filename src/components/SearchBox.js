import React, { useState } from 'react';
import { TextField, Button, IconButton, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isMediumScreen = useMediaQuery('(min-width:600px)');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Implement your search logic here, e.g., using the searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '10px' }}>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          marginRight: 1,
          backgroundColor: '#f5f5f5',
          borderRadius: '20px',
          boxShadow: 1,
          width: {
            xs: '100%', // Adjust width for smaller screens
            md: isMediumScreen ? '600px' : '100%', // Maintain wider width for medium screens and above
          },
        }}
      />
      <IconButton onClick={handleSearchClick} sx={{ backgroundColor: "#dd42", '&:hover': { backgroundColor: 'lightgray' } }}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBox;
