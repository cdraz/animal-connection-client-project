// Function imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AnimalsPage.css";

// React components
import AnimalCard from '../AnimalCard/AnimalCard';
import AnimalSearchBar from '../../SearchBar/AnimalSearchBar'

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AnimalsPage() {
  // Dispatch hook, store access
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(0)
  const animals = useSelector((store) => store.animals);

  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMALS' });
  }, []);


  return (
    <div id="animalsPage">
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h1">
            Animals
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <AnimalSearchBar />
        </Grid>
        <Grid item container spacing={2} xs={9}>
          {/* <div id= "animalCardContainer"> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              alignItems="left"
            >
              {Array.isArray(animals) ?
                animals.map(animal => (
                  <AnimalCard key={animal.id} animal={animal} />
                )) : <p>Loading...</p>}
            </Grid>

          </Box>
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default AnimalsPage;
