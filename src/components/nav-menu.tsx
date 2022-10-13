import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NavMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Menu..
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem>
          <NavLink
            to="/play"
            className={(isActive) => 'nav-link' + (!isActive ? ' unselected' : '')}>
            PLAY!!
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/" className={(isActive) => 'nav-link' + (!isActive ? ' unselected' : '')}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/cards/create"
            className={(isActive) => 'nav-link' + (!isActive ? ' unselected' : '')}>
            Add new card
          </NavLink>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
