import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dogBreeds from '../Animals/DogBreedList';
import './AnimalSearch.css'


function AnimalSearchBar() {
    const dispatch = useDispatch();
    const types = (useSelector(store => store.animalTypes))
    const options = dogBreeds;
    // Get animal types from server on component load
    useEffect(() => {
        dispatch({
            type: 'FETCH_ANIMAL_TYPES'
        });
    }, []);
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
            <form onSubmit={(evt) => filterAnimals(evt)}>
            <FormControl id="animalSearch" >
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

                    <Autocomplete
                        name='type'
                        options={types}
                        getOptionLabel={(option) => option.type}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        filterSelectedOptions 
                        onChange={(evt, opt) => {
                            setqFilter({...qFilter, type: opt.id});
                            console.log(qFilter);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Animal Type"
                                placeholder="Types"
                            />
                        )}
                    />

                    {qFilter.type === 1 ?
                    <Autocomplete
                            name='breed'
                            options={options}
                            getOptionLabel={(option) => option}
                            filterSelectedOptions
                            onChange={(evt, opt) => {
                                setqFilter({...qFilter, breed: opt.toLowerCase()});
                                console.log(qFilter);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Breed"
                                    placeholder="Breeds"
                                />
                            )}
                        />
                        : <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, breed: evt.target.value})} 
                            type="text" label='Breed'
                        />}

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minL: evt.target.value})}
                            type="number" label='Min Length' 
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxL: evt.target.value})}
                            type="number" label='Max Length'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minH: evt.target.value})} 
                            type="number" label='Min Height'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxH: evt.target.value})} 
                            type="number" label='Max Height'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                            type="number" label='Min Neck'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minN: evt.target.value})} 
                            type="number" label='Max Neck'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minB: evt.target.value})} 
                            type="number" label='Min Belly'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxB: evt.target.value})} 
                            type="number" label='Max Belly'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minW: evt.target.value})} 
                            type="number" label='Min Weight'
                        />
                        <TextField 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxW: evt.target.value})}
                            type="number" label='Max Weight'
                        />
                    </div>

                    <div style={{ display: 'inline-flex' }}>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, minA: evt.target.value})} 
                            type="date" label="BDay Start"
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(evt) => setqFilter({...qFilter, maxA: evt.target.value})} 
                            type="date" label="BDay End"
                        />
                    </div>
                    <Button type="submit" variant="contained">Filter</Button>
                </Stack>
            </FormControl>
            </form>
        </div>
    );
}

export default AnimalSearchBar;
