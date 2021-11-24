import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import makeStyles from "./stylessheet";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Form from "./../Form/Form";

const CategoryList = () => {
  const classes = makeStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} variant="h4" component="h4">
        Movies Data
      </Typography>
      <div>
        <Accordion className={classes.catAccordian}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordiansummery}>
            <Form headrText="Add Movie" btnText="create" />
            <Accordion className={classes.movieAccordian}>
              <AccordionSummary>
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionSummary>
                <div>
                  <Button variant="contained" color="warning" size="small">
                    Edit
                  </Button>{" "}
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accordiansummery}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
};
export default CategoryList;
