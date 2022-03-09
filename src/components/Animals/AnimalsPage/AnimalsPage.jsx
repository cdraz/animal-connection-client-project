// Function imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AnimalsPage.css";

// React components
import AnimalCard from '../AnimalCard/AnimalCard';
import AnimalSearchBar from '../../SearchBar/AnimalSearchBar'

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
        {Array.isArray(animals) ?
            animals.map( animal => (
            <AnimalCard key= {animal.id} animal={animal} />
        )) : <p>Loading...</p>}
        </div>
      </>
    )
}

export default AnimalsPage;
