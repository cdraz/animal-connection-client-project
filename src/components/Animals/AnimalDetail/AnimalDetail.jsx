import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// React components
import AnimalSummary from '../AnimalSummary/AnimalSummary';
import AnimalAddToJobButton from '../AnimalAddToJobButton/AnimalAddToJobButton';
import AnimalAuditionHistoryTable from '../AnimalAuditionHistoryTable/AnimalAuditionHistoryTable';
import AnimalOwnerTable from '../AnimalOwnerTable/AnimalOwnerTable';
import AnimalWorkHistoryTable from '../AnimalWorkHistoryTable/AnimalWorkHistoryTable';
import AnimalBehaviorTrainingTable from '../AnimalBehaviorTrainingTable/AnimalBehaviorTrainingTable';

// MUI imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function AnimalDetail() {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const animal = useSelector(store => store.selectedAnimal);

    // Set id from URL parameters
    const { id } = useParams();

    // Declare refreshAnimal
    const refreshAnimal = () => {
        dispatch({ type: 'FETCH_SELECTED_ANIMAL', payload: { id: id }});
    }
    useEffect(() => {
        refreshAnimal();
    }, [id]);

    return (
        <Grid container spacing={5}>
            <Grid item xs={4}>
                <Stack spacing={4}>
                    <AnimalSummary animal={animal} />
                    {
                        animal.contact ?
                            <AnimalOwnerTable contact={animal.contact[0]} />
                            : <p>Loading owner info...</p>
                    }
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        Work History
                    </Typography>
                    <AnimalWorkHistoryTable animal={animal} />
                    <AnimalAuditionHistoryTable animal={animal} />
                    {
                        // If animalType is dog, show behavior/training (we only track this for dogs)
                        animal.animalType === 1 ? 
                            <AnimalBehaviorTrainingTable animal={animal} />
                        : null
                    }
                    <AnimalAddToJobButton animal={animal} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default AnimalDetail;