import { Box } from "@mui/material";
import styles from "../styled/styles.module.css";
import { MuiAppBar } from "./Appbar";
function CustomFooter({ position, open }) {
  return (
    <>
      <MuiAppBar
        sx={{ top: "auto", padding: "1rem 1.7rem", bottom: 0,height:"60px"}}
        position={position}
        color="#040404"
        open={open}
        
      >
        <Box className={`${styles.spacebetween}`} sx={{fontSize:{xs:"0.8rem",sm:"0.9rem",md:"1rem"}}}>
          <Box>
            <a
              color="primary"
              href="https://coreui.io/"
              style={{ color: "mediumblue" }}
            >
              CoreUI
            </a>
            <span> © 2024 creativeLabs.</span>
          </Box>
          <Box>
            <span>Powered by </span>
            <a
              color="primary"
              href="https://coreui.io/react"
              style={{ color: "mediumblue" }}
            >
              CoreUI React Admin & Dashboard Template
            </a>
          </Box>
        </Box>
      </MuiAppBar>
    </>
  );
}

export default CustomFooter;
