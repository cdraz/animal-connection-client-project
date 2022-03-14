// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// React components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

function JobContacts() {
  const selectedJobContacts = useSelector((store) => store.selectedJobContacts);
  // Dispatch hook, store access
  const dispatch = useDispatch();

  return (
    <>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Primary Number</th>
            <th>Secondary Number</th>
            <th>Contact Page</th>
          </tr>
        </thead>
        <tbody>
          {selectedJobContacts.length > 0
            ? selectedJobContacts.map((contact) => (
                <tr>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.primaryNumber}</td>
                  <td>{contact.secondaryNumber}</td>
                  <td>
                    <Link to={`/contacts/${contact.contactId}`}>Details</Link>
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
