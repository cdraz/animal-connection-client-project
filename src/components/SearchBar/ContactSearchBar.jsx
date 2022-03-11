import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



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
        <>
        {/* <button onClick={() => console.log(qFilter)}></button> */}
        <form id="animalSearch" onSubmit={(evt) => filterContacts(evt)}>
            <input 
                onChange={(evt) => setqFilter({...qFilter, firstName: evt.target.value})}
                type="text" placeholder='First Name' 
            />
            <input 
                onChange={(evt) => setqFilter({...qFilter, lastName: evt.target.value})}
                type="text" placeholder='Last Name' 
            />
            <input 
                onChange={(evt) => setqFilter({...qFilter, company: evt.target.value})}
                type="text" placeholder='Company'
            />
            <div>
            <input 
                onChange={(evt) => setqFilter({...qFilter, type: evt.target.value})} 
                type="text" placeholder='Type'
            />
            <button type="submit">update</button>
            </div>
        </form>
        </>
    )

}

export default ContactSearchBar;