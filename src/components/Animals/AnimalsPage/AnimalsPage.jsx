// Function imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AnimalsPage.css";

// React components
import AnimalCard from '../AnimalCard/AnimalCard';
import AnimalSearchBar from '../../SearchBar/AnimalSearchBar'
//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function AnimalsPage() {
  // Dispatch hook, store access
  const dispatch = useDispatch();
  const animals = useSelector((store) => store.animals);

    useEffect(() => {
        dispatch({ type: 'FETCH_ANIMALS' });
    }, []);


    return(
        <>
        
        <AnimalSearchBar />
        <div id= "animalCardContainer">
        <Box sx={{ flexGrow: 1 }}>
<Grid
          container
          spacing={3}
          justifyContent="space-evenly"
        >
        {Array.isArray(animals) ?
            animals.map( animal => (
            <AnimalCard key= {animal.id} animal={animal} />
        )) : <p>Loading...</p>}
        </Grid>
      </Box>
        </div>
      </>
    )
}

export default AnimalsPage;
