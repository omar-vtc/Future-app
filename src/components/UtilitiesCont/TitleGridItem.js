import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "./Typography";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import MediationIcon from "@mui/icons-material/Mediation";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import TokenIcon from "@mui/icons-material/Token";
// Material Kit 2 React components
import MKBox from "./../MKBox/index";
import MKTypography from "./../MKTypography/index";
import Box from "@mui/material/Box";

function TitleGridItem(props) {
  return (
    <Grid item xs={6} md={props.width}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-End"
        pl={2}
        py={{ xs: 3, md: 1 }}
        sx={{ paddingRight: "10px" }}
        style={{
          border: "solid skyBlue 2px",
          borderRadius: "10px 0px 10px 0px",
        }}
      >
        <Typography
          variant="h5"
          color="text"
          textAlign="right"
          style={{
            width: "50%",
            marginRight: "10px ",
          }}
        >
          {props.title}
        </Typography>
        <MKBox
          width="2.5rem"
          height="2.5rem"
          variant="gradient"
          bgColor="info"
          color="white"
          coloredShadow="info"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: "10px 0px 10px 0px" }}
        >
          {props.icon === 1 ? (
            <MediationIcon fontSize="medium" sx={{ color: "white" }} />
          ) : props.icon === 2 ? (
            <TokenIcon fontSize="medium" sx={{ color: "white" }} />
          ) : (
            <SettingsOverscanIcon fontSize="medium" sx={{ color: "white" }} />
          )}
        </MKBox>
      </Box>
    </Grid>
  );
}

export default TitleGridItem;
