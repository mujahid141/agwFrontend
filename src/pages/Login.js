import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  color: #333333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
  color: #555555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
`;

const LogoutButton = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      username,
      password,
    };

    axios
      .post('http://127.0.0.1:8000/customers/login/', loginData)
      .then((response) => {
        const accessToken = response.data.access;
        console.log(response.data);
       
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        navigate('/account');
      })
      .catch((error) => {
        console.error(error);
      });

    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    !accessToken ? (
      <Root>
        <FormWrapper>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit">Login</Button>
          </form>
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/signup">Don't have an account? Sign Up</Link>
        </FormWrapper>
      </Root>
    ) : (
      <Root>
        <CenteredDiv>
          <Typography variant="h6">You are Logged In</Typography>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </CenteredDiv>
      </Root>
    )
  );
};

export default Login;
