import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";



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
        dispatch({ type: 'FETCH_CONTACTS', payload: qFilter });
    };

    return (
        <div  className="searchBar">
        <Typography className="searchHeader" variant="h5" sx={{marginBottom: '30px'}}>
            Search Contacts
        </Typography>
            <form onSubmit={(evt) => filterContacts(evt)} className="searchForm">
            <FormControl>
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