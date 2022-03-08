import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
        dispatch({ type: 'FETCH_JOBS', payload: qFilter });
    }
    return (
        <div  className="container">
            {/* <button onClick={() => console.log(qFilter)}></button> */}
            <form id="animalSearch" onSubmit={(evt) => filterAnimals(evt)}>
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

                <input 
                    onChange={(evt) => setqFilter({...qFilter, client: evt.target.value})}
                    type="text" placeholder='min length' 
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, jobNumber: evt.target.value})}
                    type="text" placeholder='max length'
                />
                <div>
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minD: evt.target.value})} 
                    type="date" 
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxD: evt.target.value})} 
                    type="date" 
                />
                <button type="submit">update</button>
                </div>
            </form>
        </div>
    );
}

export default JobSearchBar;