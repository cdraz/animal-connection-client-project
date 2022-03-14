// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


// React components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

function JobContacts() {
  // Dispatch hook, store access
  const dispatch = useDispatch();

  return (
    <>
      <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Primary Number</th>
                        <th>Secondary Number</th>
                    </tr>
                </thead>
                <tbody  >

                    {/* {contacts.length > 0 
                        ? contacts.map(contact => ( */}
                            <tr>
                                {/* <td>
                                    {contact.firstName}
                                </td>
                                <td>
                                    {contact.lastName}
                                </td>
                                <td>
                                    {contact.primaryNumber}
                                </td>
                                <td>
                                    {contact.secondaryNumber}
                                </td> */}
                                {/* <td>
                                    <Link to={`/contacts/${contact.id}`}>Details
                                    </Link>
                                </td> */}
                            </tr>
                        {/* )) */}
                        {/* :console.log('loading...')} */}
                </tbody>
            </table>
    </>
  );
}

export default JobContacts;