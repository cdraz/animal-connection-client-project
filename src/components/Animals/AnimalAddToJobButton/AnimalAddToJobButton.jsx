import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AnimalAddToJobButton({ animal }) {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const activeJobs = useSelector(store => store.activeJobs)

    // Set autocomplete options. If still awaiting from server, they are an empty array until the response is received
    let options = [];
    if (Array.isArray(activeJobs)) {
        options = activeJobs.map(job => (
            { label: job.jobNumber, id: job.id }
        ));
    }

    // Set state variable
    const [jobInput, setJobInput] = useState();

    // Declare addToJob
    const addToJob = () => {
        console.log('animal is', animal);
        dispatch({
            type: 'ADD_ANIMAL_TO_JOB',
            payload: {
                animalId: animal.id,
                jobId: jobInput
            }
        });
    };

    // On component load, get active jobs
    useEffect(() => {
        dispatch({ type: 'FETCH_ACTIVE_JOBS' });
    }, []);

    return (
        <>
            <Typography variant="h5">
                Add Animal to Job
            </Typography>

            {Array.isArray(options) ?
                <Autocomplete
                    options={options}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    onChange={(event, option) => setJobInput(option.id)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Jobs"
                            placeholder="Jobs"
                        />
                    )}
                />
                : <p>Loading jobs...</p>}
            <Button
                variant="contained"
                onClick={addToJob}
            >
                Add to Job
            </Button>
        </>
    )
}

export default AnimalAddToJobButton;