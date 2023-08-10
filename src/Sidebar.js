import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Empleados" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
