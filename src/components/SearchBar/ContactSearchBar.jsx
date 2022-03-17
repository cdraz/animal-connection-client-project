import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



function ContactSearchBar() {
    const dispatch = useDispatch();
    const [qFilter, setqFilter] = useState({ 
        firstName: '',
        lastName: '',
        company: '',
        type: '',
    })
    function filterContacts(event){
        event.preventDefault();
        console.log(qFilter);
        dispatch({ type: 'FETCH_CONTACTS', payload: qFilter });
    };

    return (
        <div  className="container">
            <form onSubmit={(evt) => filterContacts(evt)}>
            <FormControl id="animalSearch" >
                <Stack spacing={2}>
                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, firstName: evt.target.value})}
                        type="text" label='First Name' 
                    />
                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, lastName: evt.target.value})}
                        type="text" label='Last Name' 
                    />
                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, company: evt.target.value})}
                        type="text" label='Company'
                    />
                    <TextField 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(evt) => setqFilter({...qFilter, type: evt.target.value})} 
                        type="text" label='Type'
                    />
                    <Button type="submit" variant="contained">Filter</Button>
                </Stack>
            </FormControl>
            </form>
        </div>
    )

}

export default ContactSearchBar;