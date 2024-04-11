import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "./Header";

import homeimg from "../media/homeimg.jpeg";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Desc = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Header />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              The Rise of Virtual Try-On Technology:
            </Typography>
            <Title variant="h3">Digital Revolution in Retail</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Virtual Try-On Tech Transforms Fashion Experiences.
            </Typography>
            <Link to={"/home"}>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Link>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={homeimg}
              alt="homeimg"
              style={{
                maxWidth: "120%",
                marginTop: "100px",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Desc;
