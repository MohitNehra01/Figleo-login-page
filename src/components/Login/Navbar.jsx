import { useContext, useState } from "react";
import { AuthContext } from "../../context/AccountProvider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import toast from 'react-hot-toast'
import ProfileDialog from "./ProfileDialog";
const pages = ["Home", "About", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { account } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false)

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
    setOpenProfile(true)
  };
  


  const handleSignOut = ()=>{
       localStorage.removeItem('userLogin');

       if(localStorage.getItem('userLogin')){
            toast.error('unable to sign Out , Try again')
       }
       else{
        toast.success('Sign Out');
        window.location.reload();
       }
       setAnchorElUser(null)
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/*  logo name */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Figleo
            </Typography>

            {/* bars  */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* bars */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/* Menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Figleo
            </Typography>

            {/* Home contact  */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* image */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={account.profile} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">
                    {account.name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {account.email}
                  </span>
                </div>
              
                  <MenuItem  onClick={handleCloseUserMenu} >
                    <Typography textAlign="center pointer" >Profile</Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleSignOut}>
                    <Typography textAlign="center">Sign out</Typography>
                  </MenuItem>
               
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
         
         <ProfileDialog openProfile = {openProfile} setOpenProfile = {setOpenProfile} />

    </>
  );
}

export default Navbar;
