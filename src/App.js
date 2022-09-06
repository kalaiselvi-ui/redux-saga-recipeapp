import React, { useState } from "react";
import "./App.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  return (
    <div className="App">
      <h2>Recipe App</h2>
      <TextField
        id="outlined-basic"
        variant="outlined"
        style={{ width: "30vw" }}
      />
      <Button
        variant="contained"
        style={{ marginLeft: "1rem", width: "90px", height: "50px" }}
      >
        Search
      </Button>
    </div>
  );
}

export default App;
