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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "80%",
    height: "80%",
    p: 4,
    overflow: "scroll",
    padding: 3,
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
          


          <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Stack spacing={2}>
              <ContactForm />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>

        </>
      )
  }
  
  export default ContactPage;
  