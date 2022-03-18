import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import IconButton from '@mui/material/IconButton';

function AnimalBehaviorTrainingTable({ animal }) {

    // Dispatch hook
    const dispatch = useDispatch();

    // Set state variables for the inputs
    // const [sitOnLeash, setSitOnLeash] = useState(animal.sitOnLeash);
    // const [sitOffLeash, setSitOffLeash] = useState(animal.sitOffLeash);
    // const [downOnLeash, setDownOnLeash] = useState(animal.downOnLeash);
    // const [downOffLeash, setDownOffLeash] = useState(animal.downOffLeash);
    // const [standOnLeash, setStandOnLeash] = useState(animal.standOnLeash);
    // const [standOffLeash, setStandOffLeash] = useState(animal.standOffLeash);
    // const [barkOnCommand, setBarkOnCommand] = useState(animal.barkOnCommand);
    // const [holdItem, setHoldItem] = useState(animal.holdItem);
    // const [mark, setMark] = useState(animal.mark);
    // const [silentCommands, setSilentCommands] = useState(animal.silentCommands);
    // const [strangerHandle, setStrangerHandle] = useState(animal.strangerHandle);
    // const [strangerDress, setStrangerDress] = useState(animal.strangerDress);
    // const [goodAroundChildren, setGoodAroundChildren] = useState(animal.goodAroundChildren);
    // const [otherDogs, setOtherDogs] = useState(animal.otherDogs);
    // const [smallAnimals, setSmallAnimals] = useState(animal.smallAnimals);
    // const [loudNoiseLights, setLoudNoiseLights] = useState(animal.loudNoiseLights);
    // const [shortNotice, setShortNotice] = useState(animal.shortNotice);
    // const [overnight, setOvernight] = useState(animal.overnight);

    // Set state variable for edit mode
    const [edit, setEdit] = useState(false);

    // Declare handleChange
    const handleChange = event => {
        dispatch({
            type: 'UPDATE_SELECTED_ANIMAL',
            payload: { [event.target.name]: event.target.checked }
        });
    }

    // Declare updateAnimal
    const updateAnimal = () => {
        console.log('in updateAnimal');
        dispatch({
            type: 'UPDATE_ANIMAL_TRAINING',
            payload: {
                id: animal.id,
                sitOnLeash: animal.sitOnLeash,
                sitOffLeash: animal.sitOffLeash,
                downOnLeash: animal.downOnLeash,
                downOffLeash: animal.downOffLeash,
                standOnLeash: animal.standOnLeash,
                standOffLeash: animal.standOffLeash,
                barkOnCommand: animal.barkOnCommand,
                holdItem: animal.holdItem,
                mark: animal.mark,
                silentCommands: animal.silentCommands,
                strangerHandle: animal.strangerHandle,
                strangerDress: animal.strangerDress,
                goodAroundChildren: animal.goodAroundChildren,
                otherDogs: animal.otherDogs,
                smallAnimals: animal.smallAnimals,
                loudNoiseLights: animal.loudNoiseLights,
                shortNotice: animal.shortNotice,
                overnight: animal.overnight
            }
        })
        setEdit(!edit);
    }

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography variant="h5">
                    Behavior, Training, Availability
                </Typography>
                {!edit &&
                    <IconButton onClick={() => setEdit(!edit)} aria-label="edit" size="medium">
                        <EditSharpIcon />
                    </IconButton>
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
                            onClick={() => setEdit(!edit)}
                        >
                            Cancel
                        </Button>
                    </>
                }
            </Stack>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='sitOnLeash' value={animal.sitOnLeash} disabled={!edit} defaultChecked={animal.sitOnLeash} />  Sit and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='sitOffLeash' value={animal.sitOffLeash} disabled={!edit} defaultChecked={animal.sitOffLeash} />  Sit and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='downOnLeash' value={animal.downOnLeash} disabled={!edit} defaultChecked={animal.downOnLeash} />  Down and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='downOffLeash' value={animal.downOffLeash} disabled={!edit} defaultChecked={animal.downOffLeash} /> Down and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='standOnLeash' value={animal.standOnLeash} disabled={!edit} defaultChecked={animal.standOnLeash} />  Stand and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='standOffLeash' value={animal.standOffLeash} disabled={!edit} defaultChecked={animal.standOffLeash} />  Stand and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='barkOnCommand' value={animal.barkOnCommand} disabled={!edit} defaultChecked={animal.barkOnCommand} />  Bark on cue
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='holdItem' value={animal.holdItem} disabled={!edit} defaultChecked={animal.holdItem} />  Hold and object
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='mark' value={animal.mark} disabled={!edit} defaultChecked={animal.mark} />  Move to a mark
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='silentCommands' value={animal.silentCommands} disabled={!edit} defaultChecked={animal.silentCommands} />  Can use silent commands
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='strangerHandle' value={animal.strangerHandle} disabled={!edit} defaultChecked={animal.strangerHandle} />  Can be handled by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='strangerDress' value={animal.strangerDress} disabled={!edit} defaultChecked={animal.strangerDress} />  Can be dressed by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='goodAroundChildren' value={animal.goodAroundChildren} disabled={!edit} defaultChecked={animal.goodAroundChildren} />  Works well with children
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='otherDogs' value={animal.otherDogs} disabled={!edit} defaultChecked={animal.otherDogs} />  Works well with other dogs
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='smallAnimals' value={animal.smallAnimals} disabled={!edit} defaultChecked={animal.smallAnimals} />  Works well with other small animals
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='loudNoiseLights' value={animal.loudNoiseLights} disabled={!edit} defaultChecked={animal.loudNoiseLights} />  Afraid of strobes
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='shortNotice' value={animal.shortNotice} disabled={!edit} defaultChecked={animal.shortNotice} />  Available at short notice
                            </div>
                            <div>
                                <Checkbox onChange={event => handleChange(event)} name='overnight' value={animal.overnight} disabled={!edit} defaultChecked={animal.overnight} />  Available for overnight jobs
                            </div>

                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default AnimalBehaviorTrainingTable;