import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import mainLogo from 'images/customIcons/main-logo.png';
import userIcon from 'images/customIcons/user-icon.png';

import LogoutDialog from 'components/LogoutDialog';

import HeaderStyle from './HeaderStyle';

const Header = ({ hideMenu, handleHideMenu }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [changeLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

  return (
    <>
      <LogoutDialog
        changeLogoutDialogOpen={changeLogoutDialogOpen}
        setLogoutDialogOpen={setLogoutDialogOpen}
      />
      <HeaderStyle>
        <div className="mainHeaderLeft">
          <button
            type="button"
            className="btnToggleMenu"
            onClick={() => {
              handleHideMenu(!hideMenu);
            }}
          >
            <i className="fa fa-bars" />
          </button>
          <div className="logoBox">
            <img src={mainLogo} alt="" />
          </div>
        </div>
        <div className="mainHeaderRight">
          <div>
            <button
              type="button"
              className="userBtn"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <span>
                {localStorage.getItem('user_info') &&
                  `${JSON.parse(localStorage.user_info).custom_id}`}
              </span>
              <img src={userIcon} alt="" />
            </button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className="wrapHeaderMenu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <div className="divider" />
              <MenuItem
                onClick={() => {
                  handleClose();
                  setLogoutDialogOpen(true);
                }}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw" />
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

Header.propTypes = {};

export default Header;
