import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";

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
    let timerInterval
    Swal.fire({
        icon: 'success',
      title: 'Contact Added!',
      timer: 1200,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  };

  const handleChange = (evt, property) => {
    setContactInfo({ ...contactInfo, [property]: evt.target.value });
  };

  return (
    <>
      <form onSubmit={createContactInfo}>
        <Stack className= "contactStack"spacing={2}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={contactInfo.firstName}
              required
              placeholder="First Name"
              onChange={(evt) => handleChange(evt, "firstName")}
            />
          </label>

          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={contactInfo.lastName}
              required
              placeholder="Last Name"
              onChange={(evt) => handleChange(evt, "lastName")}
            />
          </label>

          <label htmlFor="primaryNumber">
            Primary Number:
            <input
              type="text"
              name="primaryNumber"
              value={contactInfo.primaryNumber}
              required
              placeholder="Primary Number"
              onChange={(evt) => handleChange(evt, "primaryNumber")}
            />
          </label>

          <label htmlFor="secondaryNumber">
            Secondary Number:
            <input
              type="text"
              name="secondaryNumber"
              value={contactInfo.secondaryNumber}
              placeholder="SecondaryNumber"
              onChange={(evt) => handleChange(evt, "secondaryNumber")}
            />
          </label>

          <label htmlFor="text">
            Text:
            <input
              type="text"
              name="text"
              value={contactInfo.text}
              required
              placeholder="Text"
              onChange={(evt) => handleChange(evt, "text")}
            />
          </label>
          </Stack>
          <Stack className= "contactStack"spacing={2}>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              required
              placeholder="Email"
              onChange={(evt) => handleChange(evt, "email")}
            />
          </label>

          <label htmlFor="type">
            Type:
            <input
              type="text"
              name="type"
              value={contactInfo.type}
              required
              placeholder="Type"
              onChange={(evt) => handleChange(evt, "type")}
            />
          </label>

          <label htmlFor="website">
            Website:
            <input
              type="text"
              name="website"
              value={contactInfo.website}
              placeholder="Website"
              onChange={(evt) => handleChange(evt, "website")}
            />
          </label>

          <label htmlFor="address">
            Address:
            <input
              type="text"
              name="address"
              value={contactInfo.address}
              required
              placeholder="Address"
              onChange={(evt) => handleChange(evt, "address")}
            />
          </label>

          <label htmlFor="notes">
            Notes:
            <input
              type="text"
              name="notes"
              value={contactInfo.notes}
              placeholder="Notes"
              onChange={(evt) => handleChange(evt, "notes")}
            />
          </label>

          <button type="submit">Enter</button>
        </Stack>
      </form>
    </>
  );
}

export default contactForm;
