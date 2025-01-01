import { Box, Container } from "@mui/material";

const PageContainer = ({ width = "xs", SX, children }) => {
  return (
    <Container maxWidth={width} sx={SX}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        {children}
      </Box>
    </Container>
  );
};

export default PageContainer;
