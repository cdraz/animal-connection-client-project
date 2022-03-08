import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './AnimalSearch.css'

function SearchBar() {
    const dispatch = useDispatch();
    const [qFilter, setqFilter] = useState({ // -------->>> needs to be saved to state
        hasWorked: 'all',
        isActive: 'all',
        breed: '',
        minA: '',
        maxA: '',
        maxL: '',
        minL: '',
        maxH: '',
        minH: '',
        maxN: '',
        minN: '',
        maxB: '',
        minB: '',
        minW: '',
        maxW: '',
        type: '',
    })
    function filterAnimals(event){
        event.preventDefault();
        console.log(qFilter);
        dispatch({
            type: "FILTER_ANIMALS",
            payload: qFilter,
        })
    }
    return (
        <div  className="container">
            <button onClick={() => console.log(qFilter)}></button>
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

            <div>
                <FormLabel id="demo-radio-buttons-group-label">Has Work History?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="historySelector"
                >
                    <FormControlLabel 
                        onChange={(evt) => setqFilter({...qFilter, hasWorked : "all"})}
                        value="all" control={<Radio />} label="Show all"
                    />
                    <FormControlLabel
                        onChange={(evt) => setqFilter({...qFilter, hasWorked : "true"})}
                        value="true" control={<Radio />} label="Has Worked"
                    />
                    <FormControlLabel
                        onChange={(evt) => setqFilter({...qFilter, hasWorked : "false"})} 
                        value="false" control={<Radio />} label="Has Not Worked"
                    />
                </RadioGroup>
            </div>

                <select onChange={(evt) => setqFilter({...qFilter, type: evt.target.value})}>
                    <option value="type">Type</option>
                </select>
                <select onChange={(evt) => setqFilter({...qFilter, breed: evt.target.value})}>
                    <option value="breed">Breed</option>
                </select>
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minL: evt.target.value})}
                    type="number" placeholder='min length' 
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxL: evt.target.value})}
                    type="number" placeholder='max length'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minH: evt.target.value})} 
                    type="number" placeholder='min height'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxH: evt.target.value})} 
                    type="number" placeholder='max height'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                    type="number" placeholder='min neck'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                    type="number" placeholder='max neck'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minB: evt.target.value})} 
                    type="number" placeholder='min belly'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxB: evt.target.value})} 
                    type="number" placeholder='max belly'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minW: evt.target.value})} 
                    type="number" placeholder='min weight'
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxW: evt.target.value})}
                    type="number" placeholder='max weight'
                />
                <div>
                <input 
                    onChange={(evt) => setqFilter({...qFilter, minA: evt.target.value})} 
                    type="date" 
                />
                <input 
                    onChange={(evt) => setqFilter({...qFilter, maxA: evt.target.value})} 
                    type="date" 
                />
                <button type="submit">update</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
