import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const months = [
  '', // Empty value for "Select Month"
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const BirthStoneCard = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic to find the birthstone based on month and day
    console.log(`Birthstone for ${month} ${day}: (Implement your logic here)`);
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  }));

  return (
    <div className="birthstone-card" style={{paddingLeft:4,marginLeft:4 , boxShadow:"20px"}}>
      <h1 className="birthstone-header">Birth Stone</h1>
      <form className="birthstone-form">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="month-label">Month</InputLabel>
          <Select
            labelId="month-label"
            id="month"
            value={month}
            label="Month"
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
               ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="day-label">Day</InputLabel>
          <Select
            labelId="day-label"
            id="day"
            value={day}
            label="Day"
            onChange={handleDayChange}
          >
            <MenuItem value="">Select Day</MenuItem>
            {Array.from({ length: 31 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledButton variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
          Find 
        </StyledButton>
      </form>
    </div>
  );
};

export default BirthStoneCard;
