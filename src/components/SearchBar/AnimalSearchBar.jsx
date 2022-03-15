import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './AnimalSearch.css'

function AnimalSearchBar() {
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
            {/* <button onClick={() => console.log(qFilter)}></button> */}
            <FormControl id="animalSearch" onSubmit={(evt) => filterAnimals(evt)}>
                <Stack spacing={2}>
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

                    <select onChange={(evt) => setqFilter({...qFilter, type: evt.target.value})}>
                        <option value="type">Type</option>
                    </select>

                    <select onChange={(evt) => setqFilter({...qFilter, breed: evt.target.value})}>
                        <option value="breed">Breed</option>
                    </select>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minL: evt.target.value})}
                            type="number" label='min length' 
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxL: evt.target.value})}
                            type="number" label='max length'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minH: evt.target.value})} 
                            type="number" label='min height'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxH: evt.target.value})} 
                            type="number" label='max height'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                            type="number" label='min neck'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                            type="number" label='max neck'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minB: evt.target.value})} 
                            type="number" label='min belly'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxB: evt.target.value})} 
                            type="number" label='max belly'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minW: evt.target.value})} 
                            type="number" label='min weight'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxW: evt.target.value})}
                            type="number" label='max weight'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minA: evt.target.value})} 
                            type="date" 
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxA: evt.target.value})} 
                            type="date" 
                        />
                    </div>
                    <Button type="submit">update</Button>
                </Stack>
            </FormControl>
        </div>
    );
}

export default AnimalSearchBar;
