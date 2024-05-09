import "../../css/aboutUs.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "./Typography";
import consult from "../../img/consult2.jpg";
import studdy from "../../img/studdy.jpg";
import training from "../../img/trainning.jpg";
import teach from "../../img/teach.jpg";
import devv from "../../img/devv.jpg";
import strategyy from "../../img/strategyy.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: consult,
    title: "الاستشارات",
    width: "40%",
    to: "/Consulting",
  },
  {
    url: studdy,
    title: "الدراسات",
    width: "20%",
    to: "/Studies",
  },
  {
    url: training,
    title: "التدريب",
    width: "40%",
    to: "/Studies",
  },
  {
    url: teach,
    title: "الخدمات التعليمية",
    width: "38%",
    to: "/Studies",
  },
  {
    url: devv,
    title: "خدمات متابعة وتطوير",
    width: "38%",
    to: "/Studies",
  },
  {
    url: strategyy,
    title: "استراتيجية اكاديمية المستقبل",
    width: "24%",
    to: "/Strategy",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        المجالات الرئيسية لأكاديمية المستقبل
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to={image.to}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </Link>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
