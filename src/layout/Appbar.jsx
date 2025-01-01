import { useLocation, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ListIcon from "@mui/icons-material/List";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../components/CustomButton";

const drawerWidth = 240;

export const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function CustomAppBar({ position, open, onclick }) {
  const location = useLocation(); // To get current route
  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/settings" },
  ];

  const iconLinks = [
    <NotificationsOutlinedIcon />,
    <ListIcon />,
    <DraftsOutlinedIcon />,
    <WbSunnyOutlinedIcon />,
  ];

  return (
    <>
      <MuiAppBar position={position} color="#040404" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={onclick}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              marginLeft: "20px",
            }}
          >
            {navLinks.map((link, index) => (
              <NavLink to={link.path}>
                <CustomButton
                  Key={index}
                  SX={{
                    color: location.pathname === link.path ? "black" : "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                  Text={link.name}
                />
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {iconLinks.map((item, index) => (
            <IconButton key={index} color="inherit">
              {item}
            </IconButton>
          ))}
          <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
        </Toolbar>

        <Box sx={{ borderTop: "1px solid gainsboro", padding: "0.7rem 1.7rem"}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={NavLink} color="primary" to="/"  sx={{ textDecoration: "underline" }}>
              Home
            </Link>
            <Typography color="gray">Dashboard</Typography>
          </Breadcrumbs>
        </Box>
      </MuiAppBar>
    </>
  );
}

export default CustomAppBar;
