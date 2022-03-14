import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from '@mui/material/Checkbox';

function AnimalForm({contactId}) {
    

    // Dispatch hook{
    const [newAnimal, setNewAnimal] = useState({
        name: '',
        rating: '',
        animalType: '',
        otherTypeDetail: '',
        breed: '',
        birthday: '',
        sex: '',
        weight: '',
        height: '',
        length: '',
        neckGirth: '',
        bellyGirth: '',
        color: '',
        active: '',
        notes: '',
        sitOnLeash: false,
        sitOffLeash: false,
        downOnLeash: false,
        downOffLeash: false,
        standOnLeash: false,
        standOffLeash: false,
        barkOnCommand: false,
        holdItem: false,
        mark: false,
        silentCommands: false,
        strangerHandle: false,
        strangerDress: false,
        goodAroundChildren: false,
        otherDogs: false,
        smallAnimals: false,
        loudNoiseLights: false,
        shortNotice: false,
        overnight: false
    });
    console.log(newAnimal);
    const handleChange = event => {
        console.log(event.target.name);
        console.log(newAnimal[event.target.name]);
        setNewAnimal({...newAnimal, [event.target.name]: event.target.value})
        console.table(newAnimal)
    }

    return (
        <>
            {/* <div style={{ display: 'inline-flex' }}>
                <Typography variant="h5">
                    Animal Details
                </Typography>
                {!edit &&
                    <Button
                        onClick={() => setEdit(!edit)}
                    >
                        Edit
                    </Button>
                }
                {edit &&
                    <>
                        <Button
                            variant="contained"
                            onClick={updateAnimal}
                        >
                            Save
                        </Button>
                        <Button
                            onClick={() => {
                                setEdit(!edit);
                                dispatch({
                                    type: 'FETCH_SELECTED_ANIMAL',
                                    payload: { id: animal.id }
                                })
                            }}
                        >
                            Cancel
                        </Button>
                    </>
                }
            </div> */}

            <Paper sx={{ padding: 3 }}>
                {/* <img
                    width="auto"
                    src={animal.image}
                /> */}
                <Stack spacing={2}>
                    <Rating
                        name='rating'
                        onChange={event => handleChange(event)}
                        size="large"
                        sx={{ margin: 'auto' }}
                    />
                    <TextField
                        name='name'
                        id="animal-name-input"
                        label="Animal Name"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='animalType'
                        id="animal-type-input"
                        label="Animal Type"
                        onChange={event => handleChange(event)}
                    />
                    {/* Show other animal type detail if type is other */}
                        <TextField
                            name='otherTypeDetail'
                            id="animal-other-type-input"
                            label="Other Type Description"
                            onChange={event => handleChange(event)}
                        />
                    <TextField
                        name='breed'
                        id="animal-breed-input"
                        label="Breed"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='birthday'
                        id="animal-birthday-input"
                        label="Birthdate"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='sex'
                        id="animal-sex-input"
                        label="Sex"
                        onChange={event => handleChange(event)}
                    />
                    <div style={{ display: 'inline-flex' }}>
                        <TextField
                            name='height'
                            id="animal-height-input"
                            label="Height (in)"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            name='length'
                            id="animal-length-input"
                            label="Length (in)"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            name='bellyGirth'
                            id="animal-girth-input"
                            label="Girth (in)"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            name='neckGirth'
                            id="animal-neck-input"
                            label="Neck (in)"
                            onChange={event => handleChange(event)}
                        />
                    </div>
                    <TextField
                        name='weight'
                        id="animal-weight-input"
                        label="Weight (lbs)"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='color'
                        id="animal-color-input"
                        label="Color"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='active'
                        id="animal-active-input"
                        label="Active"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        name='notes'
                        id="animal-notes-input"
                        label="Notes"
                        onChange={event => handleChange(event)}
                    />
                </Stack>
            </Paper>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='sitOnLeash' />  Sit and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='sitOffLeash' />  Sit and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='downOnLeash' />  Down and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='downOffLeash' /> Down and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='standOnLeash' />  Stand and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='standOffLeash' />  Stand and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='barkOnCommand' />  Bark on cue
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='holdItem' />  Hold and object
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='mark' />  Move to a mark
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='silentCommands' />  Can use silent commands
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} checked name='strangerHandle' />  Can be handled by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='strangerDress' />  Can be dressed by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='goodAroundChildren' />  Works well with children
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='otherDogs' />  Works well with other dogs
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='smallAnimals' />  Works well with other small animals
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='loudNoiseLights' />  Afraid of strobes
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='shortNotice' />  Available at short notice
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='overnight' />  Available for overnight jobs
                            </div>

                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default AnimalForm;