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
                            <Checkbox />  Sit and stay on leash
                        </div>
                        <div>
                            <Checkbox />  Sit and stay off leash
                        </div>
                        <div>
                            <Checkbox />  Down and stay on leash
                        </div>
                        <div>
                            <Checkbox /> Down and stay off leash
                        </div>
                        <div>
                            <Checkbox />  Stand and stay on leash
                        </div>
                        <div>
                            <Checkbox />  Stand and stay off leash
                        </div>
                        <div>
                            <Checkbox />  Bark on cue
                        </div>
                        <div>
                            <Checkbox />  Hold and object
                        </div>
                        <div>
                            <Checkbox />  Move to a mark
                        </div>
                        <div>
                            <Checkbox />  Can use silent commands
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={0}>
                        <div>
                            <Checkbox />  Can be handled by stranger
                        </div>
                        <div>
                            <Checkbox />  Can be dressed by stranger
                        </div>
                        <div>
                            <Checkbox />  Works well with children
                        </div>
                        <div>
                            <Checkbox />  Works well with other dogs
                        </div>
                        <div>
                            <Checkbox />  Works well with other small animals
                        </div>
                        <div>
                            <Checkbox />  Afraid of strobes
                        </div>
                        <div>
                            <Checkbox />  Available at short notice
                        </div>
                        <div>
                            <Checkbox />  Available for overnight jobs
                        </div>

                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AnimalBehaviorTrainingTable;