import React, { SetStateAction, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import makeStyles from "./stylessheet";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../../store/store";
import { addCategory, addMovie, editMovie } from "../../store/categoriesSlice";
import { FormType } from "../../types/FormType";
//  Reusable component
const Form = (props: {
  setUpdate: React.Dispatch<SetStateAction<any>>;
  headrText: string;
  btnText: string;
  btnId: number; // indicate the category id
  formType: FormType; // indicate which action should be done on submit
  name: string;
  description: string;
  movieId: number;
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>(props.name);
  const [description, setDescription] = useState<string>(props.description);
  const classes = makeStyles();
  useEffect(() => {
    setDescription(props.description);
    setName(props.name);
  }, [props]);

  const onNameChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };
  const onDescChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };
  const validate = () => {
    // validate that the name in only letters and if  it add/update  movie  it check if description is empty or not
    if (name == "" || /^[a-zA-Z]+$/.test(name) == false) {
      alert("please  fill the Name Field (Name only contain characters)");
      return false;
    }
    if (
      props.formType == FormType.ADD_MOVIE ||
      props.formType == FormType.EDIT_MOVIE
    ) {
      if (description == "") {
        alert("please  fill the Description Field");
        return false;
      }
    }
    return true;
  };
  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!validate()) {
      return;
    }
    switch (props.formType) {
      case FormType.ADD_CATEGORY:
        dispatch(
          //fire addcategory to add new one in redux store
          addCategory({
            name: name,
            description: description,
            movies: [],
          })
        );
        break;
      case FormType.ADD_MOVIE:
        dispatch(
          addMovie({
            categoryId: props?.btnId ? props.btnId : 0,
            movie: {
              name: name,
              description: description,
              rate: "0.0",
            },
          })
        );
        break;
      case FormType.EDIT_MOVIE:
        dispatch(
          editMovie({
            categoryId: props?.btnId ? props.btnId : 0,
            movie: {
              id: props?.movieId,
              name: name,
              description: description,
            },
          })
        );
        props.setUpdate({
          name: "",
          description: "",
          movieId: 0,
          type: FormType.ADD_MOVIE,
          headrText: "Add Movie",
          btnText: "Create",
        });

        break;
      default:
        break;
    }
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
          value={name}
          onChange={onNameChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="desc"
          label="Description"
          variant="outlined"
          value={description}
          onChange={onDescChange}
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          id={props.btnId?.toString()}
          onClick={submit}
        >
          {props.btnText}
        </Button>
      </Stack>
    </Paper>
  );
};
export default Form;
