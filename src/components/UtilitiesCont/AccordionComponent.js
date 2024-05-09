import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import H3Edit from "./H3Edit";
import Paragraph from "./Paragraph";
function AccordionComponent(props) {
  return (
    <Accordion
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <AccordionSummary
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "flex-start",
          //   border: "solid gold",
          width: "100%",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            // border: "solid red",
            width: "100%",
          }}
        >
          {" "}
          <H3Edit props={props.title} />
        </Typography>
        {/* <ExpandMoreIcon /> */}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "row-reverse",

          //   border: "solid",
          width: "100%",
        }}
      >
        <Paragraph
          sx={{ float: "right" }}
          className="paragraph-accordion"
          props={props.desc}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComponent;
