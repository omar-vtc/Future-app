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

function TitleGridItem(props) {
  return (
    <Grid item xs={6} md={4} style={{ border: "solid blue" }}>
      <MKBox
        display="flex"
        alignItems="center"
        justifyContent="flex-End"
        pl={2}
        py={{ xs: 3, md: 1 }}
        style={{ border: "solid yellow" }}
      >
        <MKTypography
          variant="h5"
          color="text"
          textAlign="right"
          style={{
            width: "40%",
            marginRight: "10px ",
          }}
        >
          {props.title}
        </MKTypography>
        <MKBox
          width="3rem"
          height="3rem"
          variant="gradient"
          bgColor="info"
          color="white"
          coloredShadow="info"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="xl"
        >
          {props.icon === 1 ? (
            <MediationIcon fontSize="medium" sx={{ color: "white" }} />
          ) : props.icon === 2 ? (
            <TokenIcon fontSize="medium" sx={{ color: "white" }} />
          ) : (
            <SettingsOverscanIcon fontSize="medium" sx={{ color: "white" }} />
          )}
        </MKBox>
      </MKBox>
    </Grid>
  );
}

export default TitleGridItem;
