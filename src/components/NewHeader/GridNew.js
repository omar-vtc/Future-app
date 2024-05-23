import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";

import { Grid } from "@mui/material";
import { Box } from "@mui/material";
function GridNew() {
  return (
    <Grid
      Container
      spacing={4}
      className="main-container container-xlg"
      style={{ border: "solid red", display: "flex" }}
      //   sx={{ width: "100%" }}
    >
      <Grid item xs={12} md={3} lg={4} sx={{ border: "solid green" }}>
        <Box
          className="intro-con-box"
          py={{ xs: 2, md: 12 }}
          sx={{
            textAlign: "center",
            border: "solid 0.5px rgba(0, 0, 0, 0.158)",
            borderRadius: "10px",
            backgroundColor: "white",
            // width: "25%",
            // display: "flex",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-lightbulb box-pic"
            viewBox="0 0 16 16"
          >
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
          </svg>
          <div class="desc">
            <h2>رؤيتنا</h2>
            <p>
              أن نكون الشركة الرائدة في تقديم الخدمات التعليمية والتدريبية
              والدراسات والاستشارات ذات الحلول الابتكارية الفعالة وفق أفضل
              الممارسات العالمية.
            </p>
          </div>
          {/* <button class="btn btn-outline-secondary btn-lg">Learn more</button> */}
        </Box>
      </Grid>

      <Grid item xs={12} md={3} lg={4} sx={{ border: "solid green" }}>
        <Box
          className="intro-con-box"
          py={{ xs: 2, md: 12 }}
          sx={{
            textAlign: "center",
            border: "solid 0.5px rgba(0, 0, 0, 0.158)",
            borderRadius: "10px",
            backgroundColor: "white",
            // width: "25%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-lightbulb box-pic"
            viewBox="0 0 16 16"
          >
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
          </svg>
          <div class="desc">
            <h2>رؤيتنا</h2>
            <p>
              أن نكون الشركة الرائدة في تقديم الخدمات التعليمية والتدريبية
              والدراسات والاستشارات ذات الحلول الابتكارية الفعالة وفق أفضل
              الممارسات العالمية.
            </p>
          </div>
          {/* <button class="btn btn-outline-secondary btn-lg">Learn more</button> */}
        </Box>
      </Grid>
      <Grid item xs={12} md={3} lg={4} sx={{ border: "solid green" }}>
        <Box
          className="intro-con-box"
          py={{ xs: 2, md: 12 }}
          sx={{
            textAlign: "center",
            border: "solid 0.5px rgba(0, 0, 0, 0.158)",
            borderRadius: "10px",
            backgroundColor: "white",
            // width: "25%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-lightbulb box-pic"
            viewBox="0 0 16 16"
          >
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
          </svg>
          <div class="desc">
            <h2>رؤيتنا</h2>
            <p>
              أن نكون الشركة الرائدة في تقديم الخدمات التعليمية والتدريبية
              والدراسات والاستشارات ذات الحلول الابتكارية الفعالة وفق أفضل
              الممارسات العالمية.
            </p>
          </div>
          {/* <button class="btn btn-outline-secondary btn-lg">Learn more</button> */}
        </Box>
      </Grid>
    </Grid>
  );
}

export default GridNew;
