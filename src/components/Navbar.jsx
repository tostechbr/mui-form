import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const Navbar = ({ isRegistered }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard" disabled={!isRegistered}>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

Navbar.propTypes = {
  isRegistered: PropTypes.bool.isRequired,
};

export default Navbar;
