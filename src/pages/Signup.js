import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
const FormWrapper = styled(Grid)({
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  width: '100%',

});

const Title = styled(Typography)({
  fontSize: '28px',
  marginBottom: '30px',
  textAlign: 'center',
  color: '#333333',
});

const FormGroup = styled('div')({
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  width: '100%',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  borderRadius: '6px',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const StyledLink = styled(Link)({
  display: 'block',
  textAlign: 'center',
  marginTop: '20px',
  color: '#007bff',
  textDecoration: 'none',
  fontSize: '16px',
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUseranme] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName , setFirstName] = useState('');
  const [lastName, setLastName] = useState('');




  const handleSubmit = async (event) => {
   
    if(password===confirmPassword){
      
      
      event.preventDefault();
      axios.post('http://127.0.0.1:8000/customers/register/',{
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
        
      })
      .then(response => {
        
        console.log(response.data);
        
      })
      .catch(error => {
        console.error(error);
        // Login failed, handle the error
      });
      // Implement signup logic here, e.g., API call
      console.log('Signup attempted:', email, password, confirmPassword);
      // Reset form fields
    } 
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('')
      setLastName('')
      setUseranme('')
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <FormWrapper container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Title variant="h1">Signup</Title>
          <form onSubmit={handleSubmit}>
              <FormGroup>
            <FormGroup>
              <StyledTextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Added required prop
              />
            </FormGroup>
            <FormGroup>
              <StyledTextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUseranme(e.target.value)}
                required 
              />
            </FormGroup>
            

            <FormGroup>
              <StyledTextField
                label="First Name"
                variant="outlined"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required // Added required prop
              />
            </FormGroup>
            <FormGroup>
              <StyledTextField
                label="Last Name"
                variant="outlined"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required // Added required prop
              />
            </FormGroup>
        
            <FormGroup>
              <StyledTextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Added required prop
              />
            </FormGroup>
              <StyledTextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required // Added required prop
              />
            </FormGroup>
            <StyledButton type="submit">Signup</StyledButton>
            <StyledLink href="/login">Already have an account? Login</StyledLink>
          </form>
        </Grid>
      </FormWrapper>
    </Box>
  );
};

export default Signup;
