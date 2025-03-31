import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { ReactComponent as GigaLogo } from "../../assets/GIGAVERSITY_LOGO.svg";
import { Link, useLocation } from "react-router-dom"; // Added useLocation to detect current path

// Define styles using makeStyles
const useStyles = makeStyles({
  appBar: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoSvg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  navContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  navLink: {
    margin: "0 8px",
    color: "#2A2B6A !important",
    fontWeight: "500 !important",
    padding: "8px 16px !important",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05) !important",
    },
  },
  authContainer: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    color: "#4A4A4A !important",
    fontWeight: "bold !important",
    padding: "8px 16px !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  signUpButton: {
    marginLeft: 16,
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "8px 24px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important", // Slightly darker shade for hover
    },
  },
  menuButton: {
    marginLeft: "auto",
    color: "#0a192f !important",
  },
  mobileMenu: {
    "& .MuiPaper-root": {
      borderRadius: "8px",
      marginTop: "8px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  menuItem: {
    padding: "12px 24px",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
  },
  signUpMenuItem: {
    backgroundColor: "#f5f5f5",
    color: "#0a192f",
    fontWeight: "bold",
  },
  active: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "5px",
      left: "16px",
      right: "16px",
      height: "2px",
      backgroundColor: "#FFC614",
    }
  }
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // Use location to highlight active link
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Logo with Link to home */}
        <Box className={classes.logo} component={Link} to="/">
          <GigaLogo className={classes.logoSvg} />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <>
            {/* Navigation links - centered */}
            <Box className={classes.navContainer}>
              <Button 
                className={`${classes.navLink} ${currentPath === "/" ? classes.active : ""}`}
                component={Link}
                to="/"
              >
                Home
              </Button>
              {/* <Button 
                className={`${classes.navLink} ${currentPath.includes("/courses") ? classes.active : ""}`}
                component={Link}
                to="/courses"
              >
                Courses
              </Button> */}
              <Button 
                className={`${classes.navLink} ${currentPath === "/about" ? classes.active : ""}`}
                component={Link}
                to="/about"
              >
                About Us
              </Button>
              <Button 
                className={`${classes.navLink} ${currentPath === "/contact" ? classes.active : ""}`}
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </Box>

            {/* Login and Sign Up buttons */}
            <Box className={classes.authContainer}>
              <Button className={classes.loginButton} component={Link} to="/login">
                Login
              </Button>
              <Button variant="contained" className={classes.signUpButton} component={Link} to="/signup">
                Sign Up
              </Button>
            </Box>
          </>
        ) : (
          // Mobile navigation with menu icon
          <IconButton
            size="large"
            edge="end"
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
          className={classes.mobileMenu}
        >
          <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/courses">Courses</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/about">About Us</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/contact">Contact</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/login">Login</MenuItem>
          <MenuItem onClick={handleClose} className={`${classes.menuItem} ${classes.signUpMenuItem}`} component={Link} to="/signup">
            Sign Up
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;