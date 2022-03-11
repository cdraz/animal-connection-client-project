import React from "react";
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";


import EditSharpIcon from '@mui/icons-material/EditSharp';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ContactDetail() {
    const dispatch = useDispatch();
    const history =  useHistory();
    const contacts = useSelector(store => store.contact)
    const selectedContact = useSelector((store) => store.selectedContact);

    useEffect(() => {
        console.log('selected contact is', contacts);
        console.log('selected contact *******', selectedContact);
        
    })

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

        

        </>
    )
};

export  default ContactDetail;