import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './AnimalSearch.css'

function JobSearchBar() {
    const dispatch = useDispatch();
    const [qFilter, setqFilter] = useState({ // -------->>> needs to be saved to state
        isActive: 'all',
        company: '',
        jobNumber: '',
        minD: '', //minmax date
        maxD: '',
    })
    function filterAnimals(event){
        event.preventDefault();
        console.log(qFilter);
        dispatch({ type: 'FILTER_JOBS', payload: qFilter });
    }
    return (
        <div  className="container">
            {/* <button onClick={() => console.log(qFilter)}></button> */}
            <form onSubmit={(evt) => filterAnimals(evt)}>
            <FormControl id="animalSearch" >
                <Stack spacing={2}>
                    <div>
                        <FormLabel id="demo-radio-buttons-group-label">Active?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="all"
                            name="activeSelector"
                        >
                            <FormControlLabel 
                                onChange={(evt) => setqFilter({...qFilter, isActive : "all"})}
                                value="all" control={<Radio />} label="Show all"
                            />
                            <FormControlLabel
                                onChange={(evt) => setqFilter({...qFilter, isActive : "true"})}
                                value="true" control={<Radio />} label="Show Active Only"
                            />
                            <FormControlLabel
                                onChange={(evt) => setqFilter({...qFilter, isActive : "false"})} 
                                value="false" control={<Radio />} label="Show Inactive Only"
                            />
                        </RadioGroup>
                    </div>

                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, client: evt.target.value})}
                        type="text" label='client' 
                    />
                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, jobNumber: evt.target.value})}
                        type="text" label='job number'
                    />
                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minD: evt.target.value})} 
                            type="date" label='Min Date'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxD: evt.target.value})} 
                            type="date" label='Max Date'
                        />
                    </div>
                    <Button type="submit">update</Button>
                    </Stack>
            </FormControl>
            </form>
        </div>
    );
}

export default JobSearchBar;