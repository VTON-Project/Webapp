import { Box, styled, Typography } from "@mui/material";
import React from "react";
const House = ({ img, price, address }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <img
          src={img}
          alt="housePhoto"
          style={{ width: "350px", height: "250px" }}
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {address}
        </Typography>
      </Box>
    </HouseBox>
  );
};

export default House;
