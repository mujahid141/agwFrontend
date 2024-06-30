import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const Lists = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (index) => {
      setSelectedIndex(index);
    };

    const handleAccountMainClick = () => {
      console.log('Account Main clicked');
      // Add your logic here
    };

    const handleNewOrdersClick = () => {
      console.log('New Orders clicked');
      // Add your logic here
    };

    const handleOrderHistoryClick = () => {
      console.log('Order History clicked');
      // Add your logic here
    };

    const handleWishlistClick = () => {
      console.log('Wishlist clicked');
      // Add your logic here
    };

    const handleTransactionsClick = () => {
      console.log('Transactions clicked');
      // Add your logic here
    };

    const handleProfileSettingClick = () => {
      console.log('Profile Setting clicked');
      // Add your logic here
    };

    const handleLogOutClick = () => {
      console.log('Log Out clicked');
      // Add your logic here
    };

    return (
      <Box sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper', padding:'5px', marginRight:'3px' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => {handleListItemClick(0)
                handleAccountMainClick()
            }}
          >
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Account Main" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => {handleListItemClick(1)
                handleNewOrdersClick()
            }}
          >
            <ListItemIcon>
              <LocalShippingIcon/>
            </ListItemIcon>
            <ListItemText primary="New Orders" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() =>{ handleListItemClick(2)
                handleOrderHistoryClick()
            }}
          >
            <ListItemIcon>
              <RestoreIcon/>
            </ListItemIcon>
            <ListItemText primary="Order History" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => {handleListItemClick(3)
                handleWishlistClick()
            }}
          >
            <ListItemIcon>
              <FavoriteIcon/>
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={() =>{ handleListItemClick(4)
                handleTransactionsClick()
            }}
          >
            <ListItemIcon>
              <PaidIcon/>
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={() =>{ handleListItemClick(5)
                handleProfileSettingClick()
            }}
          >
            <ListItemIcon>
              <SettingsApplicationsIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile Setting" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 6}
            onClick={() => {handleListItemClick(6)
                handleLogOutClick()
            }}
          >
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>
      </Box>
    );
};

export default Lists;