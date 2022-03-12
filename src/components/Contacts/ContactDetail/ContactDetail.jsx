import React from "react";
import {useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";

import AnimalCard from '../../Animals/AnimalCard/AnimalCard';
import JobCard from '../../Job/JobCard/JobCard'


import EditSharpIcon from '@mui/icons-material/EditSharp';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ContactDetail() {
    const dispatch = useDispatch();
    const history =  useHistory();
    const contacts = useSelector(store => store.contact);
    const selectedContact = useSelector((store) => store.selectedContact);

    // Set id from URL parameters
    const { id } = useParams();

    
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_CONTACT', payload: { id: id }});
    }, []);

    const deleteContact = () => {
        dispatch({type: 'DELETE_CONTACT', payload: contacts.id});
        history.push('/contacts')
    }

    

    return (
        <>
        <p className="contact-detail">Type: {`${contacts.type}`}
        <br></br>
         Name: {`${contacts.firstName} ${contacts.lastName}`}
         <br></br>
         Number: {`${contacts.primaryNumber} ${contacts.secondaryNumber}`}
         <br></br>
         Text: {`${contacts.text}`}
         <br></br>
         Email: {`${contacts.email}`}
         <br></br>
         Type: {`${contacts.type}`}
         <br></br>
         Website: {`${contacts.website}`}
         <br></br>
         Address: {`${contacts.address}`}
         <br></br>
         Notes: {`${contacts.notes}`}
          </p>
        
        <EditSharpIcon onClick={() => history.push('/contactEdit')}>Edit</EditSharpIcon>
        <IconButton onClick= {deleteContact} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        <h2>WORK HISTORY</h2>
            {Array.isArray(contacts.jobs) ? (
                //not sure why im getting a null in array
                contacts.jobs.map((job) => job && <JobCard job={job} key={job.id} />)
            ) : (
                <p>Loading...</p>
            )}
        <h2>ANIMALS</h2>
        {Array.isArray(contacts.animals) ?
            contacts.animals.map( animal => (
            <AnimalCard key= {animal.id} animal={animal} />
        )) : <p>Loading...</p>}

        

        </>
    )
};

export  default ContactDetail;