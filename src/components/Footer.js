import React from 'react';
import { Box,  Link, List, ListItem, ListItemText,ListItemIcon, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




const Footer = () => {
  const navigationLinks = [
    { text: 'Home', href: '' },
    { text: 'Shop', href: '/shop' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
    { text: 'About', href: '/about' },
    { text: 'Login/Signup', href: '/login' },
  ];
  const navigationLinks1 =[
    { text: 'Gems', href: '' },
    { text: 'Jewelry', href: '#' },
    { text: 'Beads', href: '#' },
    { text: 'Antiques', href: '#' },
    { text: 'Strings', href: '#' },
    { text: 'Specimens', href: '#' },
  ];
  const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    marginRight: theme.spacing(4),
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  }));
  
  const socialMediaLinks = [
    { name: 'Facebook', icon: <FacebookIcon /> },
    { name: 'Twitter', icon: <TwitterIcon /> },
    { name: 'YouTube', icon: <YouTubeIcon /> },
    { name: 'Instagram', icon: <InstagramIcon /> },
    { name: 'LinkedIn', icon: <LinkedInIcon /> },
    { name: 'Pinterest', icon: <PinterestIcon /> },
    { name: 'WhatsApp', icon: <WhatsAppIcon /> },

  
  
   
    // Add more social media links as needed
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.text} disableGutters>
              <ListItemText>
                <StyledLink href={item.href}>{item.text}</StyledLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
      <List>
          {navigationLinks1.map((item) => (
            <ListItem key={item.text} disableGutters>
              <ListItemText>
                <StyledLink href={item.href}>{item.text}</StyledLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
      <List>
        {socialMediaLinks.map((link) => (
          <ListItem key={link.name} disableGutters sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}>
            <ListItemIcon>
              <IconButton sx={{ color: 'inherit' }}>{link.icon}</IconButton>
            </ListItemIcon>
            <ListItemText>
              <StyledLink href="#">{link.name}</StyledLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );
};

export default Footer;
