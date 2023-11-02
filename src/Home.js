import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Home() {
  return (
    <div style={{ margin: "0 10%", padding: "5% 0" }}>
      <Card sx={{ maxWidth: 1200 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Virtual Try-On Network
          </Typography>

          <Typography variant="body1">
            The evolution of Virtual Try-On (VTO) technology has been a
            collaborative endeavor with numerous researchers contributing
            ingenious solutions to overcome the inherent challenges. Our project
            has been significantly enlightened by various groundbreaking works
            in this domain, which have paved the path towards a more accurate
            and efficient 2D Virtual Try-On Network. The following elaboration
            provides a deeper insight into the core contributions of the notable
            works we have leveraged: 1. General Purpose Virtual Try-On
            (GP-VTON): In a recent contribution, Z. Xiel et al. have delved into
            the development of a General-Purpose Virtual Try-On network
            (GP-VTON), presented at the prestigious 2023 IEEE/CVF Conference on
            Computer Vision and Pattern Recognition (CVPR). Their novel
            approach, which encompasses collaborative local-flow global-parsing
            learning, is aimed at broadening the scope and applicability of VTO
            systems. This work shines a light on the pathway towards achieving a
            versatile VTO system that can cater to a diverse range of apparel
            and body types, thereby providing a rich foundation for our project
            to build upon. 2. Context-Driven Image-Based Virtual Try-On Network
            (C-VTON): The work of B. Fele et al., showcased at the 2022 IEEE/CVF
            Winter Conference on Applications of Computer Vision (WACV),
            introduced the concept of a Context-Driven Image-Based Virtual
            Try-On Network (C-VTON). This framework emphasized the importance of
            contextual understanding in generating realistic virtual try-on
            images. By ingeniously integrating context- aware features, this
            model has showcased a marked improvement in capturing and rendering
            the nuanced details of clothing, providing a valuable perspective
            for our endeavor to enhance the realism in 2D VTO. 3. High Fidelity
            Virtual Try-on Network (VTON-HF): The High-Fidelity Virtual Try-on
            Network (VTON-HF) proposed by C. Du et al., during the 2021 IEEE
            33rd International Conference on Tools with Artificial Intelligence
            (ICTAI), brought forth the concept of semantic adaptation to the
            fore. By employing semantic adaptation, this model demonstrated a
            better understanding and rendering of complex clothing textures and
            styles. The strides made in achieving high-fidelity virtual try-on
            images in this work provide a robust foundation for our project's
            ambition to enhance the accuracy of product representation. 4.
            Image-based Clothes Changing System: The endeavor by Zheng et al.,
            has been instrumental in exploring the realm of image-based clothes
            changing, offering a system that capably alters the clothes in
            images while preserving the original pose and expression of
            individuals. This seminal work, which adeptly handles the challenges
            associated with clothes changing, provides a crucial perspective on
            the potential and limitations of image manipulation in the VTO
            domain. 5. Parser-Free Virtual Try-on via Distilling Appearance
            Flows: The innovative parser-free approach to virtual try-on by Y.
            Ge et al., presented at the 2021 IEEE/CVF Conference on Computer
            Vision and Pattern Recognition (CVPR), aims at simplifying the VTO
            process while maintaining a high level of visual realism. By
            distilling appearance flows, this work has carved a niche in
            reducing the computational complexity associated with traditional
            parsing methods, thereby offering a streamlined pathway towards
            efficient VTO systems.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Card Button</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;
