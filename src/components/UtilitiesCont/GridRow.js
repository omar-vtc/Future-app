import { Grid } from "@mui/material";

import Typography from "./Typography";
import Box from "@mui/material/Box";

function GridRow(props) {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        <Grid
          item
          xs={6}
          md={5}
          //   style={{ border: "solid green" }}
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-End"
            pl={2}
            py={{ xs: 3, md: 3 }}
            sx={{
              width: "100%",
              height: "100%",
              border: "solid skyBlue 2px",
              borderSize: "border-box",
              borderRadius: "10px 0px 10px 0px",
            }}
          >
            <Typography
              variant="body2"
              color="text"
              textAlign="right"
              pl={2}
              style={{
                marginRight: "10px ",
                // border: "solid red",
                fontSize: "1.04rem",
                fontWeight: "550",
              }}
            >
              {props.attr1}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          //   style={{ border: "solid green" }}
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-End"
            pl={2}
            py={{ xs: 6, md: 3 }}
            style={{
              border: "solid skyBlue 2px",
              height: "100%",
              borderRadius: "10px 0px 10px 0px",
            }}
          >
            <Typography
              variant="body2"
              color="text"
              textAlign="right"
              pl={2}
              sx={{
                // width: "40%",
                marginRight: "10px ",
                // border: "solid red",
                fontSize: "1.04rem",
                fontWeight: "550",
              }}
            >
              {props.attr2}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          //   style={{ border: "solid green" }}
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-End"
            pl={2}
            py={{ xs: 3, md: 3 }}
            style={{
              border: "solid skyBlue 2px",
              height: "100%",
              borderRadius: "10px 0px 10px 0px",
            }}
          >
            <Typography
              variant="body2"
              color="text"
              textAlign="right"
              pl={2}
              sx={{
                // width: "40%",
                marginRight: "10px ",
                // border: "solid red",
                fontSize: "1.04rem",
                fontWeight: "550",
              }}
            >
              {props.attr3}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default GridRow;
