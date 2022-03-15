import React, {useState} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";

import AnimalCard from '../../Animals/AnimalCard/AnimalCard';
import JobCard from '../../Job/JobCard/JobCard';
import ContactEdit from '../ContactEdit/ContactEdit'
import ContactAddToJobButton from "../ContactAddToJobButton/ContactAddToJobButton";
import Swal from "sweetalert2";


import EditSharpIcon from '@mui/icons-material/EditSharp';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ContactDetail() {
    const dispatch = useDispatch();
    const history =  useHistory();
    const selectedContact = useSelector((store) => store.contacts);
    const [editPage, setEditPage] = useState(false);

    // Set id from URL parameters
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_CONTACT', payload: { id: id }});
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
        dispatch({type: 'DELETE_CONTACT', payload: id });
        history.push('/contacts')
      } else if (result.isDenied) {
        Swal.fire("Contact Safe", "", "info");
      }
    });
  };
    return (
        <>
        <ContactAddToJobButton contact={selectedContact} />
        {editPage
        ? <ContactEdit editPage={editPage} setEditPage={setEditPage} />
            // ?<form>
            //     <input placeholder="First Name" value={editContact.firstName}></input>
            //     <input placeholder="Last Name" value={editContact.lastName}></input>
            //     <input placeholder="Primary Number" value={editContact.primaryNumber}></input>
            //     <input placeholder="Secondary Number" value={contacts.secondaryNumber}></input>
            //     <input placeholder="Text?" value={editContact.text}></input>
            //     <input placeholder="Email" value={editContact.email}></input>
            //     <input placeholder="Type" value={editContact.type}></input>
            //     <input placeholder="Website" value={editContact.website}></input>
            //     <input placeholder="Address" value={editContact.address}></input>
            //     <input placeholder="Notes" value={editContact.notes}></input>
            //     <button type="submit">Submit</button>
            // </form>
        : <>
            <p>Type: {`${selectedContact.type}`}</p>
            <p>Name: {`${selectedContact.firstName} ${selectedContact.lastName}`}</p>
            <p>Number: {`${selectedContact.primaryNumber} ${selectedContact.secondaryNumber}`}</p>
            <p>Text: {`${selectedContact.text}`}</p>
            <p>Email: {`${selectedContact.email}`}</p>
            <p>Type: {`${selectedContact.type}`}</p>
            <p>Website: {`${selectedContact.website}`}</p>
            <p>Address: {`${selectedContact.address}`}</p>
            <p>Notes: {`${selectedContact.notes}`}</p>
        </>}
        
        <EditSharpIcon 
            onClick={() => {
                setEditPage(!editPage);
                }
            }>
                Edit
        </EditSharpIcon>
        <IconButton onClick={deleteContact} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        <h2>WORK HISTORY</h2>
            {Array.isArray(selectedContact.jobs) ? (
                //not sure why im getting a null in array
                selectedContact.jobs.map((job) => job && <JobCard job={job} key={job.id} />)
            ) : (
                <p>Loading...</p>
            )}
        <h2>ANIMALS</h2><Link to={`/animals/add/${id}`}>Add New Animal</Link>
        {Array.isArray(selectedContact.animals) ?
            selectedContact.animals.map( animal => (
            <AnimalCard key= {animal.id} animal={animal} />
        )) : <p>No animals on record.</p>}
        </>
    )
};

export  default ContactDetail;