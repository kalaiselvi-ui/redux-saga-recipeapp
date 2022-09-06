import React from "react";
import "./App.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <TextField id="outlined-basic" variant="outlined" />
      <Button variant="contained">Search</Button>
    </div>
  );
}

export default App;
