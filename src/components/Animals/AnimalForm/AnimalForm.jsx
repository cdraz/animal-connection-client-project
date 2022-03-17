import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from "react-router-dom"; 

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import DateAdapter from '@mui/lab/AdapterMoment';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';


function AnimalForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const [selectedFile, setSelectedFile] = useState(null);
  
    //Event handlers
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const [newAnimal, setNewAnimal] = useState({
        contactId: id, 
        image: '', //needs an input box and setup with cloud server
        name: '',
        rating: 0,
        animalType: '',
        otherTypeDetail: '',
        breed: '',
        birthday: '',
        sex: '',
        weight: 0,
        height: 0,
        length: 0,
        neckGirth: 0,
        bellyGirth: 0,
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
        loudNoiseLights: false,
        silentCommands: false,
        strangerHandle: false,
        strangerDress: false,
        offLeashTrained: false,
        goodAroundChildren: false,
        atDistanceFromTrainer: false,
        otherDogs: false,
        smallAnimals: false,
        loudNoiseLights: false,
        shortNotice: false,
        overnight: false,
        livesClose: false
    });
    
    const handleChange = event => {
        setNewAnimal({...newAnimal, [event.target.name]: event.target.value});
        console.log(newAnimal);
    }
    const handleBoolChange = (event) => {
        newAnimal[event.target.name] = event.target.checked;
    }

    const submitNewAnimal = (evt) => {
        evt.preventDefault();

        console.log("SELECTED FILE IS", selectedFile);
    //appending id,description and file to form Data to be sent over in an object with selected project
    //form data will be req.file and selected project will be req.body
    const formData = new FormData();
    for (let key in newAnimal){
        formData.append(key, newAnimal[key])
    }
     formData.append("selectedFile", selectedFile);

  let imageDataToSend = {
      formData: formData,
      id: {id},
    };
        
        dispatch({
            type: 'ADD_NEW_ANIMAL',
            payload: imageDataToSend,
        });
        history.push(`/contacts/${id}`)
    }

    return (
        <>
        <form onSubmit={submitNewAnimal}>
        <FormControl id="animalForm"  sx={{ minWidth: '60%' }}>
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
                     <input
                     required
            type="file"
            className="form-control-file"
            name="uploaded_file"
            onChange={handleFileSelect}
          />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        name='name'
                        id="animal-name-input"
                        label="Animal Name"
                        onChange={event => handleChange(event)}
                    />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        name='animalType'
                        id="animal-type-input"
                        label="Animal Type"
                        onChange={event => handleChange(event)}
                    />
                    {/* Show other animal type detail if type is other */}
                    {newAnimal.animalType === '1' &&
                        <>
                        <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                            name='otherTypeDetail'
                            id="animal-other-type-input"
                            label="Other Type Description"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='breed'
                            id="animal-breed-input"
                            label="Breed"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            type="date"
                            name='birthday'
                            id="animal-birthday-input"
                            label="Birthdate"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='sex'
                            id="animal-sex-input"
                            label="Sex"
                            onChange={event => handleChange(event)}
                        />
                        <div style={{ display: 'inline-flex' }}>
                            <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                                name='height'
                                id="animal-height-input"
                                label="Height (in)"
                                onChange={event => handleChange(event)}
                            />
                            <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                                name='length'
                                id="animal-length-input"
                                label="Length (in)"
                                onChange={event => handleChange(event)}
                            />
                            <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                                name='bellyGirth'
                                id="animal-girth-input"
                                label="Girth (in)"
                                onChange={event => handleChange(event)}
                            />
                            <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                                name='neckGirth'
                                id="animal-neck-input"
                                label="Neck (in)"
                                onChange={event => handleChange(event)}
                            />
                        </div>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='weight'
                            id="animal-weight-input"
                            label="Weight (lbs)"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='color'
                            id="animal-color-input"
                            label="Color"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            name='active'
                            id="animal-active-input"
                            label="Active"
                            onChange={event => handleChange(event)}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='notes'
                            id="animal-notes-input"
                            label="Notes"
                            onChange={event => handleChange(event)}
                        />
                    </>}
                </Stack>
            </Paper>

            {newAnimal.animalType === "1" &&
            <>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='sitOnLeash' />  Sit and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='sitOffLeash' />  Sit and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='downOnLeash' />  Down and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='downOffLeash' /> Down and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='standOnLeash' />  Stand and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='standOffLeash' />  Stand and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='barkOnCommand' />  Bark on cue
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='holdItem' />  Hold and object
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='mark' />  Move to a mark
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='silentCommands' />  Can use silent commands
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} value name='strangerHandle' />  Can be handled by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='strangerDress' />  Can be dressed by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='offLeashTrained' />  Works well with children
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='goodAroundChildren' />  Works well with children
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='otherDogs' />  Works well with other dogs
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='smallAnimals' />  Works well with other small animals
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='atDistanceFromTrainer' />  Can work at a Distance from trainer
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='loudNoiseLights' />  Afraid of strobes
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='shortNotice' />  Available at short notice
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='overnight' />  Available for overnight jobs
                            </div>
                            <div>
                                <Checkbox onChange={event => handleBoolChange(event)} name='livesClose' />  Lives near by
                            </div>

                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
            </>}
            <Button type="submit">SUBMIT</Button>
        </FormControl>
        </form>
        </>
    )
}

export default AnimalForm;