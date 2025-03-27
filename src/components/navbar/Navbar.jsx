import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { ReactComponent as GigaLogo } from "../../assets/GIGAVERSITY_LOGO.svg";

// Define styles using makeStyles
const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
    backgroundImage: 'none !important',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoSvg: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  navContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navLink: {
    margin: '0 8px',
    color: "#2A2B6A !important"
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    color: '#4A4A4A !important',
  },
  signUpButton: {
    marginLeft: 16,
    backgroundColor: '#0a192f !important',
    color: 'white',
    '&:hover': {
      backgroundColor: '#142640 !important',
    },
  },
  menuButton: {
    marginLeft: 'auto',
  },
  activeMenuItem: {
    color: '#f6c230',
  },
  signUpMenuItem: {
    backgroundColor: '#f5f5f5',
  }
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const overrideStyles = {
    '--AppBar-background': 'transparent',
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className={classes.appBar} sx={overrideStyles}>
      <Toolbar>
        {/* Logo */}
        <Box className={classes.logo}>
          <GigaLogo className={classes.logoSvg} />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <>
            {/* Navigation links - centered */}
            <Box className={classes.navContainer}>
              <Button color="inherit" className={classes.navLink}>Home</Button>
              <Button className={classes.navLink}>Courses</Button>
              <Button color="inherit" className={classes.navLink}>About Us</Button>
            </Box>

            {/* Login and Sign Up buttons */}
            <Box className={classes.authContainer}>
              <Button className={classes.loginButton}>Login</Button>
              <Button 
                variant="contained" 
                className={classes.signUpButton}
              >
                Sign Up
              </Button>
            </Box>
          </>
        ) : (
          // Mobile navigation with menu icon
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Courses</MenuItem>
          <MenuItem onClick={handleClose}>About Us</MenuItem>
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose} className={classes.signUpMenuItem}>Sign Up</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;