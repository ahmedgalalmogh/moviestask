import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import makeStyles from "./stylessheet";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Form = (props: { headrText: string; btnText: string }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
  });
  const classes = makeStyles();
  const onNameChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, name: e.target.value });
  };
  const onDescChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, description: e.target.value });
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} variant="h6" component="h3">
        {props.headrText}
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          className={classes.input}
          id="Name"
          value={state.name}
          onChange={onNameChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="desc"
          label="Description"
          variant="outlined"
          value={state.description}
          onChange={onDescChange}
        />
        <Button variant="contained" color="success" size="small">
          {props.btnText}
        </Button>
      </Stack>
    </Paper>
  );
};
export default Form;
