import { Box, styled, Typography } from "@mui/material";
import React from "react";
const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          The rationale behind this fusion lies in the complementary strengths
          of the two systems. The GP-VTON is renowned for its high-accuracy pose
          estimation capabilities, essential for realistic and precise garment
          fitting in a virtual environment. This feature is especially crucial
          in handling diverse body types and complex poses, ensuring that the
          virtual garments adjust accurately to the user's figure. On the other
          hand, the C-VTON is recognized for its lightweight and efficient
          architecture, making it an ideal framework for practical and scalable
          VTO applications. By integrating the 3-layered DensePose network from
          GP-VTON into the more streamlined architecture of C-VTON, we aim to
          create a system that combines the best of both worlds: accuracy and
          efficiency. The primary objective of our proposed fusion is to
          harmonize the high-accuracy pose estimation of GP-VTON with the nimble
          and efficient structure of C-VTON.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default Guide;
