import React from "react";

import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditSharpIcon from '@mui/icons-material/EditSharp';


function contactDetail() {
    const dispatch = useDispatch();
    const history =  useHistory();
    const contacts = useSelector(store => store.contact)

    

    return (
        <>
        <h5 className="contact">Contact List <span>
        <EditSharpIcon onClick={() => history.push('/contact-edit')}>Edit</EditSharpIcon></span></h5>
        <p className="contact-detail">Type: {`${contacts.type}`} Name: {`${contacts.firstName} `}</p>

        </>
    )
};

export  default contactDetail;