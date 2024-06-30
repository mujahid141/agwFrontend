import React from 'react';
import { Grid, Typography, Box, Container, Divider, Card, CardContent, CardMedia, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledGemImage = styled(CardMedia)(({ theme }) => ({
  height: 400,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
  [theme.breakpoints.down('sm')]: {
    height: 250,
  },
}));

const About = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledGemImage
            image="https://images.unsplash.com/photo-1595925027008-e907e52c39fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVlIjdhMjlhNzlhN2Vl&auto=format&fit=crop&w=1400&q=80"
            alt="Sparkling gems and jewelry"
            title="A world of exquisite gems"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
            About Us - Your Trusted Gem and Jewelry Destination
          </Typography>
          <Typography variant="body1">
            We are passionate about curating a collection of exquisite gems and jewelry that captivate hearts and ignite imaginations. Our journey began with a deep appreciation for the natural beauty and brilliance of gemstones, and a desire to share this wonder with the world.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Our Commitment to Quality
          </Typography>
          <Typography variant="body1">
            We source our gems from reputable ethical suppliers, ensuring the authenticity and sustainability of each piece. Our skilled artisans meticulously craft each creation, combining traditional techniques with modern innovation to achieve unparalleled quality.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Experience the Magic
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Explore our collection and discover the perfect gem or jewelry piece to enhance your style or make a lasting impression.
            
              <MenuItem  component={Link} to="/shop" >Explore</MenuItem>
            
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
