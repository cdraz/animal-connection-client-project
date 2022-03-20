import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import AnimalCard from '../../Animals/AnimalCard/AnimalCard';
import JobCard from '../../Job/JobCard/JobCard';
import ContactEdit from '../ContactEdit/ContactEdit'
import ContactAddToJobButton from "../ContactAddToJobButton/ContactAddToJobButton";
import Swal from "sweetalert2";


import EditSharpIcon from '@mui/icons-material/EditSharp';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import './ContactDetail.css'
import AnimalWorkHistoryTable from '../../Animals/AnimalWorkHistoryTable/AnimalWorkHistoryTable'


function ContactDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedContact = useSelector((store) => store.contacts);
  const [edit, setEdit] = useState(false);
  console.log(selectedContact);

  // Set id from URL parameters
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_SELECTED_CONTACT', payload: { id: id } });
  }, []);

  const handleChange = (evt) => {
    dispatch({
      type: 'UPDATE_ACTIVE_CONTACTS',
      payload: {[event.target.name]: evt.target.value}
    });
  }
  
  const saveEdit = (event) => {
    event.preventDefault()
    dispatch ({
        type: 'SAVE_CONTACT_CHANGES',
        payload: contacts
    });
    setEditPage(!editPage)
    // history.push(`/contacts/${contacts.id}`)
  }

  //deletes entire selected job and all foreign keys associated with it after confirmation
  const deleteContact = () => {
    Swal.fire({
      title: "Are you sure you want to delete Contact?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Entire Contact!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Contact has been Deleted!", "", "success");
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        history.push('/contacts')
      } else if (result.isDenied) {
        Swal.fire("Contact Safe", "", "info");
      }
    });
  };
  return (
    <Grid container spacing={5} sx={{marginLeft: '5px', marginRight: '5px'}}>
      <Grid item xs={4}>
          <Typography variant="h1">{`${selectedContact.firstName} ${selectedContact.lastName}`}</Typography>
    <form onSubmit={() => saveEdit()}>
      <Stack spacing={2}>
        {edit &&
          <><TextField
          name='firstName'
          label="First Name"
          value={selectedContact.firstName}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='lastName'
          label="Last Name"
          value={selectedContact.lastName}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        /></>}
        <TextField
          name='primaryNumber'
          label="Primary Number"
          value={selectedContact.primaryNumber}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='secondaryNumber'
          label="Secondary Number"
          value={selectedContact.secondaryNumber}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='text'
          label="Textable"
          value={selectedContact.text}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='email'
          label="Email"
          value={selectedContact.email}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='address'
          label="Address"
          value={selectedContact.address}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='type'
          label="Type"
          value={selectedContact.type}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='website'
          label="Website"
          value={selectedContact.website}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='company'
          label="Company"
          value={selectedContact.company}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
        <TextField
          name='notes'
          label="Notes"
          value={selectedContact.notes}
          onChange={event => handleChange(event)}
          InputProps={{
              readOnly: !edit,
          }}
          InputLabelProps={{
              shrink: true
          }}
        />
      </Stack>
      </form>
      {/* {editPage
        ? 
          <ContactEdit editPage={editPage} setEditPage={setEditPage} />
        : <>
          <Typography variant="h1">{`${selectedContact.firstName} ${selectedContact.lastName}`}</Typography>
          <Typography>Number: </Typography>
          <Typography>{selectedContact.primaryNumber} </Typography>
          <Typography>{selectedContact.secondaryNumber}</Typography>
          <Typography>Text:</Typography>
          <Typography>{`${selectedContact.text ? 'yes' : 'no'}`}</Typography>
          <Typography>Email:</Typography>
          <Typography>{`${selectedContact.email}`}</Typography>
          <Typography>Address:</Typography>
          <Typography>{`${selectedContact.address}`}</Typography>
          <Typography>Type:</Typography>
          <Typography>{`${selectedContact.type}`}</Typography>
          <Typography>Website:</Typography>
          <Typography>{`${selectedContact.website}`}</Typography>
          <Typography>Company:</Typography>
          <Typography>{`${selectedContact.company}`}</Typography>
          <Typography>Notes:</Typography>
          <Typography>{`${selectedContact.notes}`}</Typography>
        </>} */}

        <IconButton 
          onClick={() => setEdit(!edit)}
          aria-label="delete" size="large" color="primary" sx={{bgcolor: '#99d0f2'}}
        >
          <EditSharpIcon />
        </IconButton>
        <IconButton
          onClick={() => deleteContact()}
          aria-label="delete" size="large" color="primary" sx={{bgcolor: '#99d0f2'}}
        >
          <DeleteIcon/>
        </IconButton>

        
        </Grid>
        <Grid item xs={6}>
        <div>
        <h2>WORK HISTORY</h2>
        <ContactAddToJobButton contact={selectedContact} id="contactDetailJobSelector"/>
        </div>
        <AnimalWorkHistoryTable animal={selectedContact}/> {/* Animal is the name of the prop inside of this component I stole */}
        {/* <div id="jobContainer">
          {Array.isArray(selectedContact.jobs)
            //not sure why im getting a null in array
            ? (selectedContact.jobs.map((job) => job && <JobCard job={job} key={job.id} />)) 
            : (<p>No work history on record.</p>)
          }
        </div> */}
        <div>
          <div id="animalCardsHeader">
            <h2>ANIMALS</h2>
            <Link to={`/animals/add/${id}`}>Add New Animal</Link>
          </div>
          <div>
              {Array.isArray(selectedContact.animals) && selectedContact.animals[0] !== null 
                ? selectedContact.animals.map( animal => (<AnimalCard key= {animal.id} animal={animal} />))
                : <p>No animals on record.</p>
              }
            </div>
        </div>
      </Grid>
    </Grid>
  )
};

export default ContactDetail;