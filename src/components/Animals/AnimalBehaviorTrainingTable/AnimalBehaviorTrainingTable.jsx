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

function AnimalBehaviorTrainingTable({ animal }) {

    // Dispatch hook
    const dispatch = useDispatch();

    // Set state variables for the inputs
    const [sitOnLeash, setSitOnLeash] = useState(animal.sitOnLeash);
    const [sitOffLeash, setSitOffLeash] = useState(animal.sitOffLeash);
    const [downOnLeash, setDownOnLeash] = useState(animal.downOnLeash);
    const [downOffLeash, setDownOffLeash] = useState(animal.downOffLeash);
    const [standOnLeash, setStandOnLeash] = useState(animal.standOnLeash);
    const [standOffLeash, setStandOffLeash] = useState(animal.standOffLeash);
    const [barkOnCommand, setBarkOnCommand] = useState(animal.barkOnCommand);
    const [holdItem, setHoldItem] = useState(animal.holdItem);
    const [mark, setMark] = useState(animal.mark);
    const [silentCommands, setSilentCommands] = useState(animal.silentCommands);
    const [strangerHandle, setStrangerHandle] = useState(animal.strangerHandle);
    const [strangerDress, setStrangerDress] = useState(animal.strangerDress);
    const [goodAroundChildren, setGoodAroundChildren] = useState(animal.goodAroundChildren);
    const [otherDogs, setOtherDogs] = useState(animal.otherDogs);
    const [smallAnimals, setSmallAnimals] = useState(animal.smallAnimals);
    const [loudNoiseLights, setLoudNoiseLights] = useState(animal.loudNoiseLights);
    const [shortNotice, setShortNotice] = useState(animal.shortNotice);
    const [overnight, setOvernight] = useState(animal.overnight);

    // Set state variable for edit mode
    const [edit, setEdit] = useState(false);

    // Declare updateAnimal
    const updateAnimal = () => {
        console.log('in updateAnimal');
        dispatch({
            type: 'UPDATE_ANIMAL_TRAINING',
            payload: {
                id: animal.id,
                sitOnLeash,
                sitOffLeash,
                downOnLeash,
                downOffLeash,
                standOnLeash,
                standOffLeash,
                barkOnCommand,
                holdItem,
                mark,
                silentCommands,
                strangerHandle,
                strangerDress,
                goodAroundChildren,
                otherDogs,
                smallAnimals,
                loudNoiseLights,
                shortNotice,
                overnight
            }
        })
        setEdit(!edit);
    }

    return (
        <>
            <div style={{ display: 'inline-flex' }}>
                <Typography variant="h5">
                    Behavior, Training, Availability
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
                        onClick={() => setEdit(!edit)}
                    >
                        Cancel
                    </Button>
                    </>
                }
            </div>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => setSitOnLeash(!sitOnLeash)} value={sitOnLeash} disabled={!edit} defaultChecked={sitOnLeash} />  Sit and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setSitOffLeash(!sitOffLeash)} value={sitOffLeash} disabled={!edit} defaultChecked={sitOffLeash} />  Sit and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setDownOnLeash(!downOnLeash)} value={downOnLeash} disabled={!edit} defaultChecked={downOnLeash} />  Down and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setDownOffLeash(!downOffLeash)} value={downOffLeash} disabled={!edit} defaultChecked={downOffLeash} /> Down and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setStandOnLeash(!standOnLeash)} value={standOnLeash} disabled={!edit} defaultChecked={standOnLeash} />  Stand and stay on leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setStandOffLeash(!standOffLeash)} value={standOffLeash} disabled={!edit} defaultChecked={standOffLeash} />  Stand and stay off leash
                            </div>
                            <div>
                                <Checkbox onChange={event => setBarkOnCommand(!barkOnCommand)} value={barkOnCommand} disabled={!edit} defaultChecked={barkOnCommand} />  Bark on cue
                            </div>
                            <div>
                                <Checkbox onChange={event => setHoldItem(!holdItem)} value={holdItem} disabled={!edit} defaultChecked={holdItem} />  Hold and object
                            </div>
                            <div>
                                <Checkbox onChange={event => setMark(!mark)} value={mark} disabled={!edit} defaultChecked={mark} />  Move to a mark
                            </div>
                            <div>
                                <Checkbox onChange={event => setSilentCommands(!silentCommands)} value={silentCommands} disabled={!edit} defaultChecked={silentCommands} />  Can use silent commands
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={0}>
                            <div>
                                <Checkbox onChange={event => setStrangerHandle(!strangerHandle)} value={strangerHandle} disabled={!edit} defaultChecked={strangerHandle} />  Can be handled by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => setStrangerDress(!strangerDress)} value={strangerDress} disabled={!edit} defaultChecked={strangerDress} />  Can be dressed by stranger
                            </div>
                            <div>
                                <Checkbox onChange={event => setGoodAroundChildren(!goodAroundChildren)} value={goodAroundChildren} disabled={!edit} defaultChecked={goodAroundChildren} />  Works well with children
                            </div>
                            <div>
                                <Checkbox onChange={event => setOtherDogs(!otherDogs)} value={otherDogs} disabled={!edit} defaultChecked={otherDogs} />  Works well with other dogs
                            </div>
                            <div>
                                <Checkbox onChange={event => setSmallAnimals(!smallAnimals)} value={smallAnimals} disabled={!edit} defaultChecked={smallAnimals} />  Works well with other small animals
                            </div>
                            <div>
                                <Checkbox onChange={event => setLoudNoiseLights(!loudNoiseLights)} value={loudNoiseLights} disabled={!edit} defaultChecked={loudNoiseLights} />  Afraid of strobes
                            </div>
                            <div>
                                <Checkbox onChange={event => setShortNotice(!shortNotice)} value={shortNotice} disabled={!edit} defaultChecked={shortNotice} />  Available at short notice
                            </div>
                            <div>
                                <Checkbox onChange={event => setOvernight(!overnight)} value={overnight} disabled={!edit} defaultChecked={overnight} />  Available for overnight jobs
                            </div>

                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default AnimalBehaviorTrainingTable;