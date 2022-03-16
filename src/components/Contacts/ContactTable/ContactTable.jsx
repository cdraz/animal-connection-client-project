import React from "react";
import "./ContactTable.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const contacts = () => {
  const contacts = useSelector((store) => store.contacts);

  return (
    <div className="contact-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Primary Number</th>
            <th>Text</th>
            <th>Email</th>
            <th>Type</th>
            <th>Address</th>
            <th>Notes</th>
            <th>Show Details</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0
            ? contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.primaryNumber}</td>
                  <td>{contact.text ? "yes" : "no"}</td>
                  <td>{contact.email}</td>
                  <td>{contact.type}</td>
                  <td>{contact.address}</td>
                  <td>{contact.notes}</td>
                  <td>
                    <Link to={`/contacts/${contact.id}`}>Details</Link>
                  </td>
                </tr>
              ))
            : console.log("loading...")}
        </tbody>
      </table>
    </div>
  );
};

export default contacts;
