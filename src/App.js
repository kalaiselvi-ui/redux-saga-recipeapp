import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h2>Recipe App</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "80px", height: "50px" }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default App;
