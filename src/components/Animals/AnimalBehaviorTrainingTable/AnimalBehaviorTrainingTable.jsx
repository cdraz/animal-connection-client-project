// MUI imports
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
    return (
        <Paper>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Stack spacing={0}>
                        <div>
                            <Checkbox value={animal.sitOnLeash} disabled checked={animal.sitOnLeash} />  Sit and stay on leash
                        </div>
                        <div>
                            <Checkbox value={animal.sitOffLeash} disabled checked={animal.sitOffLeash} />  Sit and stay off leash
                        </div>
                        <div>
                            <Checkbox value={animal.downOnLeash} disabled checked={animal.downOnLeash} />  Down and stay on leash
                        </div>
                        <div>
                            <Checkbox value={animal.downOffLeash} disabled checked={animal.downOffLeash} /> Down and stay off leash
                        </div>
                        <div>
                            <Checkbox value={animal.standOnLeash} disabled checked={animal.standOnLeash} />  Stand and stay on leash
                        </div>
                        <div>
                            <Checkbox value={animal.standOffLeash} disabled checked={animal.standOffLeash} />  Stand and stay off leash
                        </div>
                        <div>
                            <Checkbox value={animal.barkOnCommand} disabled checked={animal.barkOnCommand} />  Bark on cue
                        </div>
                        <div>
                            <Checkbox value={animal.holdItem} disabled checked={animal.holdItem} />  Hold and object
                        </div>
                        <div>
                            <Checkbox value={animal.mark} disabled checked={animal.mark} />  Move to a mark
                        </div>
                        <div>
                            <Checkbox value={animal.silentCommands} disabled checked={animal.silentCommands} />  Can use silent commands
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={0}>
                        <div>
                            <Checkbox value={animal.strangerHandle} disabled checked={animal.strangerHandle} />  Can be handled by stranger
                        </div>
                        <div>
                            <Checkbox value={animal.strangerDress} disabled checked={animal.strangerDress} />  Can be dressed by stranger
                        </div>
                        <div>
                            <Checkbox value={animal.goodAroundChildren} disabled checked={animal.goodAroundChildren} />  Works well with children
                        </div>
                        <div>
                            <Checkbox value={animal.otherDogs} disabled checked={animal.otherDogs} />  Works well with other dogs
                        </div>
                        <div>
                            <Checkbox value={animal.smallAnimals} disabled checked={animal.smallAnimals} />  Works well with other small animals
                        </div>
                        <div>
                            <Checkbox value={animal.loudNoiseLights} disabled checked={animal.loudNoiseLights} />  Afraid of strobes
                        </div>
                        <div>
                            <Checkbox value={animal.shortNotice} disabled checked={animal.shortNotice} />  Available at short notice
                        </div>
                        <div>
                            <Checkbox value={animal.overnight} disabled checked={animal.overnight} />  Available for overnight jobs
                        </div>

                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AnimalBehaviorTrainingTable;