import React from "react";
import './Navbar.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const settings = [{
  type: 'Register',
  path: '/register'
},
{
  type: 'Login',
  path: '/login'
}
]
const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
   <>
   <div style={{background: 'black'}} >
        <div className="abs-img" >
          <img style={{height: '700px', width: '100%'}} src="../../image/dance.jpg" alt="" />

          <div className="abs-text">
             <h1 style={{color: 'white', fontSize: '64px', textAlign: 'center',}} >All Headphones</h1>
             <span style={{color: 'white', fontSize: '34px',  color: '#0096d6'}} >Discover the perfect headphones for every occasion</span>
          </div>
        </div>
        <div className="fix" >
            <div className="navbar">
                <div className="navbar__content">
                  <img src="" className="navbar__content_img" alt="" />
                  <h5  className="navbar__content_title"></h5>
                </div>

                <div className="navbar_shop">
                    <a href="#" className="navbar_link">Shop</a>
                    <a href="#" className="navbar_link">About Us</a>
                    <a href="#" className="navbar_link">Partners</a>
                </div>

                <div className="navbar__icons">
                    <input placeholder="Search" type="search" name="" id="" className="navbar_search" />
                    <button className="navbar_card" >0</button>
                    <Box sx={{ flexGrow: 0 , paddingRight: '1rem'}}>
                      <Tooltip title="\">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="" src="..." />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting.type}</Typography>
                          </MenuItem>
                        ))}
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Logout</Typography>
                       </MenuItem>
                      </Menu>
                     </Box>
                </div>
            </div>
        </div>
   </div>

   </>
  )
};

export default Navbar;
