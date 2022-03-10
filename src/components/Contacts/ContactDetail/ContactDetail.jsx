import React from "react";

import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from "@mui/material/Button";


function ContactDetail() {
    const dispatch = useDispatch();
    const history =  useHistory();
    const contacts = useSelector(store => store.contact)

    

    return (
        <>
        <p className="contact-detail">Type: {`${contacts.type}`} Name: {`${contacts.firstName} `}</p>
        <EditSharpIcon onClick={() => history.push('/contact-edit')}>Edit</EditSharpIcon>

        {/* <Button
            onClick={deleteJob}
            id="jobDelete"
            type="button"
            value="Delete"
            variant="contained"
          >
            Delete Job
          </Button> */}

        </>
    )
};

export  default ContactDetail;