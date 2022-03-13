import React, {useState} from "react";
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
    const [editPage, setEditPage] = useState(false);
    const [editContact, setEditContact] = useState(selectedContact);
    console.log(editContact);

    // Set id from URL parameters
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_CONTACT', payload: { id: id }});
    }, []);

    const deleteContact = () => {
        dispatch({type: 'DELETE_CONTACT', payload: selectedContact.id});
        history.push('/contacts')
    }

    return (
        <>
        {editPage 
            ?<form>
                <input placeholder="First Name" value={editContact.firstName}></input>
                <input placeholder="Last Name" value={editContact.lastName}></input>
                <input placeholder="Primary Number" value={editContact.primaryNumber}></input>
                {/* <input placeholder="Secondary Number" value={contacts.secondaryNumber}></input> */}
                <input placeholder="Text?" value={editContact.text}></input>
                <input placeholder="Email" value={editContact.email}></input>
                <input placeholder="Type" value={editContact.type}></input>
                <input placeholder="Website" value={editContact.website}></input>
                <input placeholder="Address" value={editContact.address}></input>
                <input placeholder="Notes" value={editContact.notes}></input>
                <button type="submit">Submit</button>
            </form>
        : <>
            <p>Type: {`${selectedContact.type}`}</p>
            <p>Name: {`${selectedContact.firstName} ${contacts.lastName}`}</p>
            <p>Number: {`${selectedContact.primaryNumber} ${contacts.secondaryNumber}`}</p>
            <p>Text: {`${selectedContact.text}`}</p>
            <p>Email: {`${selectedContact.email}`}</p>
            <p>Type: {`${selectedContact.type}`}</p>
            <p>Website: {`${selectedContact.website}`}</p>
            <p>Address: {`${selectedContact.address}`}</p>
            <p>Notes: {`${selectedContact.notes}`}</p>
        </>}
        
        <EditSharpIcon onClick={() => setEditPage(!editPage)}>Edit</EditSharpIcon>
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