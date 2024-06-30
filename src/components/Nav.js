import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  Avatar,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMobileView, setIsMobileView] = React.useState(window.innerWidth < 768); // Adjust breakpoint as needed

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ddd', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ marginRight: 2, cursor: 'pointer', textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Your Logo" style={{ width: 70, height: 70, borderRadius: '50%' }} /> {/* Apply styles */}
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="body1" component={Link} to="/" sx={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5, marginRight: 3 }}>
              Home
            </Typography>
            <Typography variant="body1" component={Link} to="/shop" sx={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5, marginRight: 3 }}>
              Shop
            </Typography>
            <Typography variant="body1" component={Link} to="/blog" sx={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5, marginRight: 3 }}>
              Blog
            </Typography>
            <Typography variant="body1" component={Link} to="/contact" sx={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5, marginRight: 3 }}>
              Contact
            </Typography>
            <Typography variant="body1" component={Link} to="/about" sx={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5 }}>
              About
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Account">
              <IconButton component={Link} to="/account" sx={{ marginRight: 2 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Wishlist">
              <IconButton component={Link} to="/wishlist" sx={{ marginRight: 2 }}>
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton component={Link} to="/cart">
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Login/Signup">
              <IconButton onClick={handleMenuOpen}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-basic"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'menu-basic',
              }}
            >
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                Login
              </MenuItem>
              <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
                Signup
              </MenuItem>
            </Menu>
          </Box>
          <IconButton color="inherit" aria-label="open drawer" sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }} onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>

  );
};

export default Navbar;
