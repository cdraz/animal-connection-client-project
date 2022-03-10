import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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

    // On component load, get active jobs
    useEffect(() => {
        dispatch({ type: 'FETCH_ACTIVE_JOBS' });
    }, []);

    return (
        <>
            {Array.isArray(options) ?
                <Autocomplete
                    multiple
                    options={options}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    onChange={(event, value) => setJobInput(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Jobs"
                            placeholder="Jobs"
                        />
                    )}
                />
                : <p>Loading jobs...</p>}
            <Button variant="contained">Add to Job</Button>
        </>
    )
}

export default AnimalAddToJobButton;