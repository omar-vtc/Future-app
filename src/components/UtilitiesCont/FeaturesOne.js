// @mui material components
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
import borders from "../../assets/theme/base/borders";
import GridFeatures from "./GridFeatures";

function FeaturesOne() {
  return (
    <div style={{ border: "solid" }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        نماذج من اعمال الأكاديمية في مجال استشارات
      </Typography>
      <MKBox
        component="section"
        py={{ xs: 3, md: 12 }}
        style={{ border: "solid red" }}
      >
        <Container>
          <Grid container alignItems="center" style={{ border: "solid green" }}>
            <GridFeatures />
            {/* <GridFeatures /> */}
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default FeaturesOne;
