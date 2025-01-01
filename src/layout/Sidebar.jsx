import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  useMediaQuery,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Speed as SpeedIcon,
  Opacity,
  ListAlt,
  StarBorder,
  PieChartOutline,
  NotificationsNone,
  Calculate,
  Close as CloseIcon,
  ExtensionOutlined,
  CreateOutlined,
  NearMeOutlined,
} from "@mui/icons-material";
import { allAppImages } from "../constant/AppImages";
import { DrawerHeader } from "../container/mainContainer";
const drawerWidth = 240;

export default function DrawerComponent({ open, handleDrawerClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detect small screens

  const sidelinksObj = {
    color: "#FFFFF3",
    "&:hover": { backgroundColor: "#2A303D" },
    margin: 0,
  };
  const iconStyle = { minWidth: "2.5rem", color: "#75797F" };

  const firstSidebarLinks = [
    { Name: "Colors", Icon: <Opacity /> },
    { Name: "Typography", Icon: <CreateOutlined /> },
  ];

  const secondSidebarLinks = [
    { name: "Base", icon: <ExtensionOutlined /> },
    { name: "Button", icon: <NearMeOutlined /> },
    { name: "Forms", icon: <ListAlt /> },
    { name: "Charts", icon: <PieChartOutline /> },
    { name: "Icons", icon: <StarBorder /> },
    { name: "Notifications", icon: <NotificationsNone /> },
    { name: "Widgets", icon: <Calculate /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#212631",
          "&:hover": {
            width: 250,
            "&::-webkit-scrollbar": {
              width: "0.6rem", // Make the scrollbar thin on hover
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "black", // Scrollbar thumb color
              borderRadius: "1rem", // Rounded corners for the scrollbar thumb
            },
          },
          "&::-webkit-scrollbar": {
            width: "0rem", // Default scrollbar width (hidden when not hovered)
          },
        },
      }}
      variant={isSmallScreen ? "temporary" : "persistent"} // Temporary on small screens
      anchor="left"
      open={open}
      onClose={isSmallScreen ? handleDrawerClose : null} // Close on small screens when clicked outside
    >
      <DrawerHeader>
        <img
          style={{ display: "flex", justifyContent: "flex-start" }}
          src={allAppImages.logo}
          width={!isSmallScreen ? "220rem" : "180rem"}
          height={"52rem"}
        />
        {isSmallScreen && (
          <IconButton onClick={handleDrawerClose} sx={{ color: "#75797F" }}>
            <CloseIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider sx={{ backgroundColor: "#FFFFF3" }} />
      <List sx={{ transform: "scale(0.9)" }}>
        <ListItem key="dash" disablePadding sx={sidelinksObj}>
          <ListItemButton>
            <ListItemIcon sx={iconStyle}>
              <SpeedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Typography
        fontSize="80%"
        fontWeight="bold"
        marginLeft="1.5rem"
        color="#75797F"
      >
        THEME
      </Typography>
      <List>
        {firstSidebarLinks.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ ...sidelinksObj, transform: "scale(0.9)" }}
          >
            <ListItemButton>
              <ListItemIcon sx={iconStyle}>{item.Icon}</ListItemIcon>
              <ListItemText primary={item.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        fontSize="80%"
        fontWeight="bold"
        marginLeft="1.5rem"
        color="#75797F"
      >
        COMPONENTS
      </Typography>
      <List>
        {secondSidebarLinks.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ ...sidelinksObj, transform: "scale(0.9)" }}
          >
            <ListItemButton>
              <ListItemIcon sx={iconStyle}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
