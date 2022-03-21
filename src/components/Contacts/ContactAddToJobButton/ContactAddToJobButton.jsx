import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

function ContactAddToJobButton({ contact }) {//<<<<<<<<<<<<<<<contact needs to be sent

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
        let timerInterval
        Swal.fire({
            icon: 'success',
          title: 'Contact Added to Job!',
          timer: 1200,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        console.log('contact is', contact);
        dispatch({
            type: 'ADD_CONTACT_TO_JOB',
            payload: {
                contactId: contact.id,
                jobId: jobInput
            }
        });
    };

    // On component load, get active jobs
    useEffect(() => {
        dispatch({ type: 'FETCH_ACTIVE_JOBS' });
    }, []);

    return (
        <div id="addContactToJobSelectorAndButton">
            <div id="contactDetailJobSelector">
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
                                label="Add Contact To Job"
                                placeholder="Jobs"
                            />
                        )}
                    />
                    : <p>Loading jobs...</p>}
            </div>
            <Button
                variant="contained"
                onClick={addToJob}
            >
                Add to Job
            </Button>
        </div>
    )
}

export default ContactAddToJobButton;