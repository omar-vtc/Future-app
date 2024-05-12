/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import linearGradient from "../../assets/theme/functions/linearGradient";
import boxShadow from "../../assets/theme/functions/boxShadow";
import pxToRem from "../../assets/theme/functions/pxToRem";
import hexToRgb from "../../assets/theme/functions/hexToRgb";
import gradientChartLine from "../../assets/theme/functions/gradientChartLine";
import rgba from "../../assets/theme/functions/rgba";
import borders from "../../assets/theme/base/borders";
import boxShadows from "../../assets/theme/base/boxShadows";
import colors from "../../assets/theme/base/colors";
export default styled(Typography)(({ theme, ownerState }) => {
  const { palette, typography } = theme;
  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    textGradient,
  } = ownerState;

  const { gradients, transparent } = colors;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  } = typography;
  // const { linearGradient } = functions;

  // fontWeight styles
  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      color !== "inherit" &&
      color !== "text" &&
      color !== "white" &&
      gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1,
  });

  // color value
  const colorValue =
    color === "inherit" || !palette[color] ? "inherit" : palette[color].main;

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    letterSpacing: "-0.125px",
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  };
});
