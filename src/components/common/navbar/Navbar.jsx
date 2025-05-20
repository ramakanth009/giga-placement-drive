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
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { ReactComponent as GigaLogo } from "../../../assets/GIGAVERSITY_LOGO.svg";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollUtils";

// Define styles using makeStyles
const useStyles = makeStyles({
  appBar: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    position: "relative",
    zIndex: 9999, // Increased z-index to ensure it's above other elements
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
    "@media (max-width: 960px)": {
      padding: "12px 16px",
    },
    "@media (max-width: 600px)": {
      padding: "10px 12px",
    },
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "@media (max-width: 960px)": {
      width: 50,
      height: 50,
      marginRight: 8,
    },
    "@media (max-width: 600px)": {
      width: 45,
      height: 45,
      marginRight: 4,
    },
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
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05) !important",
      transform: "translateY(-2px)",
    },
    "@media (max-width: 1200px)": {
      margin: "0 4px",
      padding: "8px 12px !important",
    },
  },
  authContainer: {
    display: "flex",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "8px 24px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important", // Slightly darker shade for hover
      transform: "translateY(-2px)",
    },
    "@media (max-width: 1200px)": {
      padding: "8px 16px !important",
    },
  },
  menuButton: {
    marginLeft: "auto",
    color: "#0a192f !important",
    padding: "8px !important",
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
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "10px 20px",
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
    },
    "@media (max-width: 1200px)": {
      "&::after": {
        left: "12px",
        right: "12px",
      },
    },
  },
  // Dropdown styles
  dropdown: {
    position: "relative",
    "&:hover $dropdownContent": {
      display: "block",
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
    "&:hover $dropdownIcon": {
      transform: "rotate(180deg)",
    },
  },
  dropdownContent: {
    position: "absolute",
    top: "100%",
    left: "0",
    minWidth: "220px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "8px 0",
    zIndex: 10000,
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(10px)",
    transition: "all 0.3s ease",
  },
  dropdownItem: {
    display: "block",
    width: "100%",
    padding: "10px 16px",
    color: "#2A2B6A",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
  },
  // Dropdown icon
  dropdownIcon: {
    marginLeft: "4px",
    fontSize: "18px",
    transition: "transform 0.3s ease",
    verticalAlign: "middle",
  },
  dropdownText: {
    display: "flex",
    alignItems: "center",
  },
  // Mobile submenu
  mobileSubmenu: {
    paddingLeft: "20px",
  },
  mobileSubmenuItem: {
    padding: "8px 16px",
    color: "#2A2B6A",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for dropdown menus in mobile view
  const [mobileFullStackOpen, setMobileFullStackOpen] = useState(false);
  const [mobileDataScienceOpen, setMobileDataScienceOpen] = useState(false);

  // Use location to highlight active link
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileFullStackOpen(false);
    setMobileDataScienceOpen(false);
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      handleClose();
    }
    scrollToTop();
  };

  const toggleMobileFullStack = (e) => {
    e.stopPropagation();
    setMobileFullStackOpen(!mobileFullStackOpen);
    setMobileDataScienceOpen(false);
  };

  const toggleMobileDataScience = (e) => {
    e.stopPropagation();
    setMobileDataScienceOpen(!mobileDataScienceOpen);
    setMobileFullStackOpen(false);
  };

  return (
    <AppBar position="relative" className={classes.appBar} sx={{ zIndex: 9999 }}>
      <Toolbar className={classes.toolbar}>
        {/* Logo with Link to home */}
        <Box
          className={classes.logo}
          component={Link}
          to="/"
          onClick={scrollToTop}
        >
          <GigaLogo className={classes.logoSvg} />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <>
            {/* Navigation links - centered */}
            <Box className={classes.navContainer}>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/" ? classes.active : ""
                }`}
                component={Link}
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Button>

              {/* Full Stack Dropdown */}
              <Box className={classes.dropdown}>
                <Button
                  className={`${classes.navLink} ${
                    currentPath.includes("/fullstack") ||
                    currentPath.includes("/fulltime/fullstack")
                      ? classes.active
                      : ""
                  }`}
                >
                  <Box className={classes.dropdownText}>
                    Vitrual Placement
                    <KeyboardArrowDownIcon className={classes.dropdownIcon} />
                  </Box>
                </Button>
                <Box className={classes.dropdownContent}>
                  <Link
                    to="/fullstack"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                  >
                    Full Stack
                  </Link>
                  <Link
                    to="/datascience"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                  >
                    Data Science
                  </Link>
                </Box>
              </Box>

              {/* Data Science Dropdown */}
              <Box className={classes.dropdown}>
                <Button
                  className={`${classes.navLink} ${
                    currentPath.includes("/datascience") ||
                    currentPath.includes("/fulltime/datascience")
                      ? classes.active
                      : ""
                  }`}
                >
                  <Box className={classes.dropdownText}>
                    full time Programs
                    <KeyboardArrowDownIcon className={classes.dropdownIcon} />
                  </Box>
                </Button>
                <Box className={classes.dropdownContent}>
                  <Link
                    to="/fulltime/fullstack"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                  >
                    Full Stack Program
                  </Link>
                  <Link
                    to="/fulltime/datascience"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                  >
                    Data Science Program
                  </Link>
                </Box>
              </Box>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/campus" ? classes.active : ""
                }`}
                component={Link}
                to="/campus"
                onClick={handleNavLinkClick}
              >
                Campus
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/blog" ? classes.active : ""
                }`}
                component={Link}
                to="/blog"
                onClick={handleNavLinkClick}
              >
                Blog
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/about" ? classes.active : ""
                }`}
                component={Link}
                to="/about"
                onClick={handleNavLinkClick}
              >
                About Us
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/contact" ? classes.active : ""
                }`}
                component={Link}
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact Us
              </Button>
            </Box>

            {/* Auth Container */}
            <Box className={classes.authContainer}>
              <Button
                variant="contained"
                className={classes.signUpButton}
                component={Link}
                to="/cart"
                onClick={scrollToTop}
              >
                Apply Now
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
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/"
          >
            Home
          </MenuItem>

          {/* Mobile Full Stack dropdown */}
          <MenuItem
            onClick={toggleMobileFullStack}
            className={classes.menuItem}
          >
            <Box className={classes.dropdownText}>
              Full Stack
              <KeyboardArrowDownIcon
                className={classes.dropdownIcon}
                style={{
                  transform: mobileFullStackOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </Box>
          </MenuItem>
          {mobileFullStackOpen && (
            <Box className={classes.mobileSubmenu}>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/fullstack"
              >
                Full Stack Virtual Placement
              </MenuItem>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/fulltime/fullstack"
              >
                Full Stack Full-Time Program
              </MenuItem>
            </Box>
          )}

          {/* Mobile Data Science dropdown */}
          <MenuItem
            onClick={toggleMobileDataScience}
            className={classes.menuItem}
          >
            <Box className={classes.dropdownText}>
              Data Science
              <KeyboardArrowDownIcon
                className={classes.dropdownIcon}
                style={{
                  transform: mobileDataScienceOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </Box>
          </MenuItem>
          {mobileDataScienceOpen && (
            <Box className={classes.mobileSubmenu}>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/datascience"
              >
                Data Science Virtual Placement
              </MenuItem>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/fulltime/datascience"
              >
                Data Science Full-Time Program
              </MenuItem>
            </Box>
          )}

          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/about"
          >
            About Us
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/contact"
          >
            Contact Us
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/campus"
          >
            Campus
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/blog"
          >
            Blog
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={`${classes.menuItem} ${classes.signUpMenuItem}`}
            component={Link}
            to="/cart"
          >
            Apply Now
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
