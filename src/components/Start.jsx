import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const categories = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 10,
    name: "Entertainment: Books",
  },
  {
    id: 11,
    name: "Entertainment: Film",
  },
  {
    id: 12,
    name: "Entertainment: Music",
  },
  {
    id: 13,
    name: "Entertainment: Musicals & Theatres",
  },
  {
    id: 14,
    name: "Entertainment: Television",
  },
  {
    id: 15,
    name: "Entertainment: Video Games",
  },
  {
    id: 16,
    name: "Entertainment: Board Games",
  },
  {
    id: 17,
    name: "Science & Nature",
  },
  {
    id: 18,
    name: "Science: Computers",
  },
  {
    id: 19,
    name: "Science: Mathematics",
  },
  {
    id: 20,
    name: "Mythology",
  },
  {
    id: 21,
    name: "Sports",
  },
  {
    id: 22,
    name: "Geography",
  },
  {
    id: 23,
    name: "History",
  },
  {
    id: 24,
    name: "Politics",
  },
  {
    id: 25,
    name: "Art",
  },
  {
    id: 26,
    name: "Celebrities",
  },
  {
    id: 27,
    name: "Animals",
  },
  {
    id: 28,
    name: "Vehicles",
  },
  {
    id: 29,
    name: "Entertainment: Comics",
  },
  {
    id: 30,
    name: "Science: Gadgets",
  },
  {
    id: 31,
    name: "Entertainment: Japanese Anime & Manga",
  },
  {
    id: 32,
    name: "Entertainment: Cartoon & Animations",
  }
];

const difficulties = [
  { id: 1, name: "Easy" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Hard" }
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "20px",
    marginButtom: "10px",
    height: "35%",
    width: "50%",
  },
  paperTwo: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "5%",
    marginButtom: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  error: {
    color: "red",
  },
}));

const Start = ({ setUsername, setCategory, setDifficulty }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    user: "",
    category: 0,
    difficulty: 0,
  });

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const name = (data, id) => {
    const element = data.find((e) => e.id === id);
    if (element) return element.name;
    return "";
  };

  const handleClick = () => {
    setUsername(state.user);
    setCategory(state.category);
    setDifficulty(name(difficulties, state.difficulty).toLowerCase());
  };

  return (
    <>
      <Container component="main" maxWidth="md" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Container>
            <div className={classes.paperTwo}>
              <Typography component="h1" variant="h5">
                Usuario
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    autoComplete="user"
                    name="user"
                    variant="outlined"
                    fullWidth
                    id="user"
                    label="Usuario"
                    autoFocus
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Grid>
              <br />
              <Grid item xs={12} md={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Categories *</InputLabel>
                  <Select
                    id="category"
                    name="category"
                    required
                    onChange={(e) => handleChange(e)}
                    defaultValue={state.category}
                    value={state.category}
                  >
                    {categories.map((category) => (
                      <MenuItem value={category.id} key={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Difficulty *</InputLabel>
                  <Select
                    name="difficulty"
                    onChange={(e) => handleChange(e)}
                    defaultValue={state.difficulty}
                    value={state.difficulty}
                  >
                    {difficulties.map((difficulty) => (
                      <MenuItem value={difficulty.id} key={difficulty.id}>
                        {difficulty.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Ingresar
            </Button>
            <br />
            <br />
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Start;
