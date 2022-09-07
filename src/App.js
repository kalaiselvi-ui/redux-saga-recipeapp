import React, { useState, useEffect } from "react";
import "./App.css";
import { TextField } from "@mui/material";
import {
  Button,
  Grid,
  Collapse,
  Typography,
  CardContent,
  IconButton,
  CardMedia,
  CardActions,
  Avatar,
  IconButtonProps,
  CardHeader,
  Card,
} from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as types from "./redux/actionTypes";
import { styled } from "@mui/material/styles";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [expanded, setExpanded] = useState(false);
  const [cardValue, setCardValue] = useState("");

  const { recipes } = useSelector((state) => state.data);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_START, query });
  }, [query]);

  // interface ExpandMoreProps extends IconButtonProps {
  //   expand: boolean;
  // }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (index) => {
    setCardValue(index);
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <h2>Recipe App</h2>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "30vw" }}
      />
      <Button
        variant="contained"
        style={{ marginLeft: "1rem", width: "90px", height: "50px" }}
        onClick={updateSearch}
      >
        Search
      </Button>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {recipes &&
              recipes.hits &&
              recipes.hits.map((item, index) => {
                return (
                  <Grid key={index} item xs={3}>
                    <Card
                      sx={{ maxWidth: 345 }}
                      style={{ marginBottom: "1rem", marginLeft: "1rem" }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={item.recipe.label}
                        subheader={
                          <span>
                            <DirectionsRunIcon />
                            {item.recipe.calories}
                          </span>
                        }
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={item.recipe.image}
                        alt={item.recipe.label}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        ></Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <ExpandMore
                          expand={expanded}
                          onClick={() => handleExpandClick(index)}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse
                        in={index === cardValue && expanded}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CardContent>
                          <Typography paragraph>Ingredients:</Typography>
                          {item.recipe.ingredients.map((item) => {
                            <Typography paragraph>{item.text}</Typography>;
                          })}
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
