import React from 'react';
import { Grid, Typography, TextField, Button, Box, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send email, process data)
    console.log('Form submitted!', { name, email, message }); // Example placeholder
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 3, boxShadow:16, padding:2, margin:2 }}>
            <Typography variant="body1">
              Feel free to reach out to us using the form below or any of the
              contact information provided.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                margin="normal"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                margin="normal"
                fullWidth
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant="h5" component="h2" sx={{ mb: 2 ,padding:1, margin:1}}>
            Contact Information
          </Typography>
          <Grid container spacing={2} sx={{padding:1,margin:1}} >
            <Grid item xs={12}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                <a href="mailto:youremail@example.com">egems@gmail.com</a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                <a href="tel:+923476257485">+923476257485</a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Main Street, Anytown, CA 12345
              </Typography>
            </Grid>
          </Grid>
          {/* Removed Google Map section */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
