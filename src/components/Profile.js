import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { Typography, Grid, Button, Divider } from '@mui/material';


const Profile = () => {
  const name = localStorage.getItem('name')   
  const  [userProfile, setUserProfile] = useState(null);
  const [address, setAddress] = useState(null)
  const email = localStorage.getItem('email')   
  const auth = localStorage.getItem('accessToken')
  const navigate = useNavigate();
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/customers/profile/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming you're storing your token in localStorage
        }
      });
      setUserProfile(response.data);
      console.log(response.data)
      
    } catch (err) {
      console.log(err)
    }
  };
  const fetchUserAdress = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/customers/profile/address/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming you're storing your token in localStorage
        }
      });
      setAddress(response.data);
      console.log(response.data)
     
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(()=>{
    fetchUserProfile()
    fetchUserAdress()
  },[])
  return (
    auth ? (

      <div>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">Email: {email}</Typography>
        <Divider/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
          {userProfile && userProfile.phone}
          </Typography>
      <Divider/>
       
        </Grid>

        <Grid item xs={6} sx={{padding:1,margin:1}}>
          <Typography variant="body1">
            Membership:{userProfile && userProfile.membership}
      
          </Typography>
      <Divider/>
      {
        userProfile &&
        <img src={'http://127.0.0.1:8000'+userProfile.customer_image}
        alt={name}/>
      }
      
        </Grid>
      </Grid>
      <Button variant="contained">Add New Address</Button>
      <div>
      <h1>User Address</h1>
      {address && (
        <div>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          
          <p>Zip Code: {address.zip_code}</p>
          {/* Render other address fields here */}
        </div>
      )}
    </div>


    </div>
) 
:
(
 <div>

    <Typography variant="h6">You are not Logged In</Typography>
    <Button onClick={()=> navigate('/login') } >Login</Button>
 </div>
  

)
  

    
  );
};

    export default Profile;
