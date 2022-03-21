import "./JobContacts.css";

// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";

// React components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";

function JobContacts() {
  // Store access
  const selectedJobContacts = useSelector((store) => store.selectedJobContacts);
  const selectedJob = useSelector((store) => store.selectedJob);

  // Dispatch hook, history hook
  const dispatch = useDispatch();
  const history = useHistory();

  // Set id from URL parameters
  const { id } = useParams();

  const deleteJobContact = (contact) => {
    Swal.fire({
      title: "Are you sure you want to delete Contact from Job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Contact!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Contact has been Deleted!", "", "success");
        dispatch({
          type: "DELETE_JOB_CONTACT",
          payload: { contact: contact.id, id: id },
        });
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "info");
      }
    });
  };

  return (
    <>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Primary Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedJobContacts.length > 0
            ? selectedJobContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="jobContactRow"
                  onClick={() => history.push(`/contacts/${contact.contactId}`)}
                >
                  <td>{contact.id}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.primaryNumber}</td>
                  <td>
                    {" "}
                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={(evt) => deleteJobContact(contact)}
                        id="jobDelete"
                        type="button"
                        value="Delete"
                        variant="contained"
                      >
                        Remove From Job
                      </Button>
                    </Stack>
                  </td>
                </tr>
              ))
            : console.log("loading...")}
        </tbody>
      </table>
    </>
  );
}

export default JobContacts;
