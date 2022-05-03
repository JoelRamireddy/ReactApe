import React, { Component } from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class UL extends Component {
  state = {};

  render() {
    if (this.props.req && this.props.catalog) {
      let req = this.props.req;
      let courses = this.props.catalog.courses;

      return (
        <React.Fragment>
          {/* <h1>REQUIRED</h1>
        <div id="Required_div">
          <p>this is a test</p>
        </div>
        <h2>ELECTIVES</h2>
        <div id="Electives_div">
          <p>this is a test</p>
        </div>
        <h3>REQUIRED COGNATES</h3>
        <div id="Cognates_div">
          <p>this is a test</p>
        </div>
        <div> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Core</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {req.categories.Core.courses.map((c) => (
                  <p>
                    {c} {courses[c].name}
                  </p>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Electives</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {req.categories.Electives.courses.map((c) => (
                  <p>
                    {c} {courses[c].name}
                  </p>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Cognates</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {req.categories.Cognates.courses.map((c) => (
                  <p>
                    {c} {courses[c].name}
                  </p>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion> */}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  }
}

export default UL;
