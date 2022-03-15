import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function AnimalSummary({ animal }) {

    // Dispatch hook, history hook
    const dispatch = useDispatch();
    const history = useHistory();

    // Set state variables for edit mode
    const [edit, setEdit] = useState(false);
    // const [name, setName] = useState(animal.name);
    // const [rating, setRating] = useState(animal.rating);
    // const [animalType, setAnimalType] = useState(animal.animalType);
    // const [otherTypeDetail, setOtherTypeDetail] = useState(animal.otherTypeDetail);
    // const [breed, setBreed] = useState(animal.breed);
    // const [birthdate, setBirthdate] = useState(animal.birthday);
    // const [sex, setSex] = useState(animal.sex);
    // const [weight, setWeight] = useState(animal.weight);
    // const [height, setHeight] = useState(animal.height);
    // const [length, setLength] = useState(animal.length);
    // const [neck, setNeck] = useState(animal.neckGirth);
    // const [belly, setBelly] = useState(animal.bellyGirth);
    // const [color, setColor] = useState(animal.color);
    // const [active, setActive] = useState(animal.active);

    // Declare updateAnimal
    const updateAnimal = () => {
        setEdit(false);
        console.log('in updateAnimal', animal);
        dispatch({
            type: 'UPDATE_ANIMAL_SUMMARY',
            payload: {
                id: animal.id,
                name: animal.name,
                rating: animal.rating,
                animalType: animal.animalType,
                otherTypeDetail: animal.otherTypeDetail,
                breed: animal.breed,
                birthday: animal.birthday,
                sex: animal.sex,
                weight: animal.weight,
                height: animal.height,
                length: animal.length,
                neckGirth: animal.neckGirth,
                bellyGirth: animal.bellyGirth,
                color: animal.color,
                active: animal.active,
                notes: animal.notes
            }
        });
    }

    // Declare deleteAnimal
    const deleteAnimal = () => {
        Swal.fire({
            title: `Are you sure you want to delete ${animal.name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this animal!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(`${animal.name} has been deleted!`, "", "success");
                dispatch({ type: "DELETE_ANIMAL", payload: { id: animal.id } });
                history.push("/animals");
            } else if (result.isDenied) {
                Swal.fire("Delete has been cancelled.", "", "info");
            }
        });
    }

    // Declare handleChange
    const handleChange = event => {
        dispatch({
            type: 'UPDATE_SELECTED_ANIMAL',
            payload: { [event.target.name]: event.target.value }
        });
    }

    return (
        <>
            <div style={{ display: 'inline-flex' }}>
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
                            variant="outlined"
                            onClick={deleteAnimal}
                        >
                            Delete
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

            </div>
            <Paper sx={{ padding: 3 }}>
                <img
                    width="auto"
                    src={`${animal.image}`}
                />
                <Stack spacing={2}>
                    <Rating
                        name='rating'
                        readOnly={!edit}
                        value={Number(animal.rating)}
                        onChange={event => handleChange(event)}
                        size="large"
                        sx={{ margin: 'auto' }}
                    />
                    <TextField
                        name='name'
                        id="animal-name-input"
                        label="Animal Name"
                        value={animal.name}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='animalType'
                        id="animal-type-input"
                        label="Animal Type"
                        value={animal.animalType}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    {/* Show other animal type detail if type is other */}
                    {animal.animalType === 'other' ?
                        <TextField
                            name='otherTypeDetail'
                            id="animal-other-type-input"
                            label="Other Type Description"
                            value={animal.otherTypeDetail}
                            onChange={event => handleChange(event)}
                            InputProps={{
                                readOnly: !edit,
                            }}
                        />
                        : null}
                    <TextField
                        name='breed'
                        id="animal-breed-input"
                        label="Breed"
                        value={animal.breed}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='birthday'
                        id="animal-birthday-input"
                        label="Birthdate"
                        value={animal.birthday}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='sex'
                        id="animal-sex-input"
                        label="Sex"
                        value={animal.sex}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <div style={{ display: 'inline-flex' }}>
                        <TextField
                            name='height'
                            id="animal-height-input"
                            label="Height (in)"
                            value={animal.height}
                            onChange={event => handleChange(event)}
                            InputProps={{
                                readOnly: !edit,
                            }}
                        />
                        <TextField
                            name='length'
                            id="animal-length-input"
                            label="Length (in)"
                            value={animal.length}
                            onChange={event => handleChange(event)}
                            InputProps={{
                                readOnly: !edit,
                            }}
                        />
                        <TextField
                            name='bellyGirth'
                            id="animal-girth-input"
                            label="Girth (in)"
                            value={animal.bellyGirth}
                            onChange={event => handleChange(event)}
                            InputProps={{
                                readOnly: !edit,
                            }}
                        />
                        <TextField
                            name='neckGirth'
                            id="animal-neck-input"
                            label="Neck (in)"
                            value={animal.neckGirth}
                            onChange={event => handleChange(event)}
                            InputProps={{
                                readOnly: !edit,
                            }}
                        />
                    </div>
                    <TextField
                        name='weight'
                        id="animal-weight-input"
                        label="Weight (lbs)"
                        value={animal.weight}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='color'
                        id="animal-color-input"
                        label="Color"
                        value={animal.color}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='active'
                        id="animal-active-input"
                        label="Active"
                        value={animal.active}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                    <TextField
                        name='notes'
                        id="animal-notes-input"
                        label="Notes"
                        value={animal.notes}
                        onChange={event => handleChange(event)}
                        InputProps={{
                            readOnly: !edit,
                        }}
                    />
                </Stack>
            </Paper>
        </>
    )
}

export default AnimalSummary;