// Function imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// React components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

import ContactSearchBar from "../../SearchBar/ContactSearchBar";
import ContactForm from "../contactForm/contactForm"


function ContactPage() {
    // Dispatch hook, store access
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
    setOpen(false);
  };

  
  
      return(
          <>
          <button
        onClick={() => {
          setOpen(true);
        }}
       >
        Add Contact
        </button>
          <ContactSearchBar />
          <ContactForm />


          
        </>
      )
  }
  
  export default ContactPage;
  