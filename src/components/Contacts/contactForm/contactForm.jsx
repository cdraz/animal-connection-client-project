import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import "./ContactForm.css";

function contactForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    primaryNumber: "",
    secondaryNumber: "",
    text: "",
    email: "",
    type: "",
    website: "",
    address: "",
    notes: "",
  });
  const createContactInfo = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_CONTACTS",
      payload: contactInfo,
    });

    history.push("/contacts");
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Contact Added!",
      timer: 1200,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  const handleChange = (evt, property) => {
    setContactInfo({ ...contactInfo, [property]: evt.target.value });
  };

  return (
    <>
      <Typography variant="h2">
        Add Contact
      </Typography>
      <form id="contactFormModal" onSubmit={createContactInfo}>
        <TextField
          label="First Name"
          type="text"
          name="firstName"
          value={contactInfo.firstName}
          required
          placeholder="First Name"
          onChange={(evt) => handleChange(evt, "firstName")}
        />

        <TextField
          label="Last Name"
          type="text"
          name="lastName"
          value={contactInfo.lastName}
          required
          placeholder="Last Name"
          onChange={(evt) => handleChange(evt, "lastName")}
        />

        <TextField
          label="Primary Number"
          type="text"
          name="primaryNumber"
          value={contactInfo.primaryNumber}
          required
          placeholder="Primary Number"
          onChange={(evt) => handleChange(evt, "primaryNumber")}
        />

        <TextField
          label="Secondary Number"
          type="text"
          name="secondaryNumber"
          value={contactInfo.secondaryNumber}
          placeholder="SecondaryNumber"
          onChange={(evt) => handleChange(evt, "secondaryNumber")}
        />

        <TextField select label="Textable" onChange={handleChange}>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </TextField>

        <TextField
          label="Email"
          type="email"
          name="email"
          value={contactInfo.email}
          required
          placeholder="Email"
          onChange={(evt) => handleChange(evt, "email")}
        />

        <TextField
          label="Type"
          type="text"
          name="type"
          value={contactInfo.type}
          required
          placeholder="Type"
          onChange={(evt) => handleChange(evt, "type")}
        />

        <TextField
          label="Website"
          type="text"
          name="website"
          value={contactInfo.website}
          placeholder="Website"
          onChange={(evt) => handleChange(evt, "website")}
        />

        <TextField
          label="Address"
          type="text"
          name="address"
          value={contactInfo.address}
          required
          placeholder="Address"
          onChange={(evt) => handleChange(evt, "address")}
        />

        <TextField
          label="Notes"
          type="text"
          name="notes"
          value={contactInfo.notes}
          placeholder="Notes"
          onChange={(evt) => handleChange(evt, "notes")}
        />

        <Button color="primary" type="submit">
          Enter
        </Button>
      </form>
    </>
  );
}

export default contactForm;
