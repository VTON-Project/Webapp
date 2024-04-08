import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

const Lines = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontSize: "16px",
              fontWeight: 900,
              mt: 2,
            }}
          >
            Virtual Try-On Network
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Generate output in 2D using VTon.
          </Typography>
        </CustomBox>
      </CustomContainer>
    </Box>
  );
};

export default Lines;
