import Stack from "@mui/material/Stack";
import MediationIcon from "@mui/icons-material/Mediation";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import TokenIcon from "@mui/icons-material/Token";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "./../MKBox/index";
import MKTypography from "./../MKTypography/index";
function GridFeatures() {
  return (
    <Grid
      item
      xs={12}
      lg={6}
      sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
    >
      <Stack style={{ border: "solid fuchsia" }}>
        <MKBox
          display="flex"
          alignItems="center"
          p={2}
          style={{ border: "solid red" }}
        >
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
            style={{ border: "solid red" }}
          >
            <MediationIcon fontSize="medium" sx={{ color: "white" }} />
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            It becomes harder for us to give others a hand.
            <br />
            We get our heart broken by people we love.
          </MKTypography>
        </MKBox>
        <MKBox display="flex" alignItems="center" p={2}>
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
            <SettingsOverscanIcon fontSize="medium" sx={{ color: "white" }}>
              settings_overscan
            </SettingsOverscanIcon>
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            As we live, our hearts turn colder.
            <br />
            Cause pain is what we go through as we become older.
          </MKTypography>
        </MKBox>
        <MKBox
          display="flex"
          alignItems="center"
          p={2}
          style={{ border: "solid black" }}
        >
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
            style={{ border: "solid green" }}
          >
            <TokenIcon fontSize="medium" sx={{ color: "white" }}>
              token
            </TokenIcon>
          </MKBox>
          <MKTypography
            variant="body2"
            color="text"
            pl={2}
            style={{ border: "solid red" }}
          >
            When we lose family over time.
            <br />
            What else could rust the heart more over time? Blackgold.
          </MKTypography>
        </MKBox>
      </Stack>
    </Grid>
  );
}

export default GridFeatures;
