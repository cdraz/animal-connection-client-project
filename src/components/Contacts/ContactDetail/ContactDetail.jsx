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
import Typography from '@mui/material/Typography';


function ContactDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedContact = useSelector((store) => store.contacts);
  const [editPage, setEditPage] = useState(false);

  // Set id from URL parameters
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_SELECTED_CONTACT', payload: { id: id } });
  }, []);




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
    <Grid container spacing={5} >
      <Grid item xs={4}>
      {editPage
        ? 
          <ContactEdit editPage={editPage} setEditPage={setEditPage} />
        : <>
          <Typography variant="h3">{`${selectedContact.firstName} ${selectedContact.lastName}`}</Typography>
          <Typography>Number: {`${selectedContact.primaryNumber} ${selectedContact.secondaryNumber}`}</Typography>
          <Typography>Text: {`${selectedContact.text}`}</Typography>
          <Typography>Email: {`${selectedContact.email}`}</Typography>
          <Typography>Address: {`${selectedContact.address}`}</Typography>
          <Typography>Type: {`${selectedContact.type}`}</Typography>
          <Typography>Website: {`${selectedContact.website}`}</Typography>
          <Typography>Company: {`${selectedContact.company}`}</Typography>
          <Typography>Notes: {`${selectedContact.notes}`}</Typography>
        </>}
        
        <IconButton 
          onClick={() => setEditPage(!editPage)}
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
        <Grid item xs={8}>

        <h2>WORK HISTORY</h2>
        <ContactAddToJobButton contact={selectedContact}/>

        {Array.isArray(selectedContact.jobs)
          //not sure why im getting a null in array
          ? (selectedContact.jobs.map((job) => job && <JobCard job={job} key={job.id} />)) 
          : (<p>No work history on record.</p>)
        }
      </Grid>
      <Grid item xs={2}>
        <h2>ANIMALS</h2><Link to={`/animals/add/${id}`}>Add New Animal</Link>
      </Grid>
        <Grid item xs={10} sx={{display: 'flex'}}>
        {Array.isArray(selectedContact.animals) && selectedContact.animals[0] !== null 
          ? selectedContact.animals.map( animal => (<AnimalCard key= {animal.id} animal={animal} />))
          : <p>No animals on record.</p>
        }
        </Grid>
    </Grid>
  )
};

export default ContactDetail;