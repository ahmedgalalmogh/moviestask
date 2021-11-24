import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import makeStyles from "./stylessheet";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Form from "./../Form/Form";
import ListIcon from "@mui/icons-material/List";
import { useAppDispatch, useAppSelector } from "./../../store/store";
import { FormType } from "../../types/FormType";
import { Movie } from "../../types/movies";
import { deleteMovie } from "../../store/categoriesSlice";

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const [updateData, setUpdateData] = useState({
    // this is the main state that passed to Form to control header text and action to be fired and  movieId if it needed
    name: "",
    description: "",
    movieId: 0,
    type: FormType.ADD_MOVIE,
    headrText: "Add Movie",
    btnText: "Create",
  });

  const categories = useAppSelector((state) => state.categories); //get all categories from my store
  const editClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movie: Movie
  ) => {
    //on edit click we update the Data passed to form
    e.stopPropagation(); // to not open the accordion when click on edit or delete
    setUpdateData({
      name: movie.name,
      description: movie.description,
      movieId: movie.id,
      type: FormType.EDIT_MOVIE,
      headrText: "Update Movie",
      btnText: "update",
    });
  };

  const deleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieId: number,
    categoryId: number
  ) => {
    e.stopPropagation();
    dispatch(
      deleteMovie({
        movieId,
        categoryId,
      })
    );
  };
  const classes = makeStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} variant="h4" component="h4">
        Movies Data
      </Typography>
      {categories.map((category) => {
        return (
          <Accordion
            className={classes.catAccordian}
            key={category.id.toString()}
          >
            <AccordionSummary>
              <Typography>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              {category?.description}
              <br />
              <Form
                name={updateData.name}
                description={updateData.description}
                movieId={updateData.movieId}
                headrText={updateData.headrText}
                btnText={updateData.btnText}
                btnId={category.id}
                formType={updateData.type}
                setUpdate={setUpdateData}
              />

              {category.movies.map((movie) => {
                return (
                  <Accordion
                    className={classes.movieAccordian}
                    key={movie.id.toString()}
                  >
                    <AccordionSummary>
                      <div className={classes.accordionSummery}>
                        <Typography>
                          <ListIcon /> {"  "}
                          {movie.name}
                        </Typography>
                        <div>
                          <Button
                            id={movie.id.toString()}
                            variant="contained"
                            color="warning"
                            size="small"
                            onClick={(e) => editClick(e, movie)}
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            id={movie.id.toString()}
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={(e) =>
                              deleteClick(e, movie.id, category.id)
                            }
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionSummary></AccordionSummary>

                    <AccordionDetails className={classes.accordionDetails}>
                      <Typography>{movie.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Paper>
  );
};
export default CategoryList;
