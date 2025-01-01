import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import DrawerComponent from "../layout/Sidebar";
import {
  Box,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import CustomFooter from "../layout/Footer";
import CustomAppBar from "../layout/Appbar";
import { useState } from "react";

const drawerWidth = 240;
const appBarHeight = "115px"; // Adjust this based on your AppBar height
const footerHeight = "3.75rem" //} Adjust this based on your Footer height

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: appBarHeight, // Offset for AppBar height
    marginBottom: footerHeight, // Offset for Footer height
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    overflowY: "auto", // Ensures the content can scroll
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function CustomSidebar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detect small screens
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open && !isSmallScreen} onclick={handleDrawer} />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open && !isSmallScreen} sx={{  minHeight: `calc(100vh - ${appBarHeight} - ${footerHeight})`}}>
        {/* <DrawerHeader/> */}
        <Outlet />
      </Main>
      <CustomFooter position="fixed" open={open && !isSmallScreen} />
    </Box>
  );
}
