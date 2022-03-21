import "./ContactPage.css";

// Function imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// React components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ContactSearchBar from "../../SearchBar/ContactSearchBar";
import ContactForm from "../contactForm/contactForm";
import ContactTable from "../ContactTable/ContactTable";

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
    width: "40%",
    height: "80%",
    p: 4,
    overflow: "scroll",
    padding: 3,
  };
  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTS" });
  }, []);

  return (
    <div id="contactPage">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Contacts</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Contact
          </Button>
        </Grid>
        <Grid item xs={2}>
          <ContactSearchBar />
        </Grid>
        <Grid item spacing={2} xs={10}>
          <ContactTable />
        </Grid>
      </Grid>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <ContactForm />
        </Box>
      </Modal>
    </div>
  );
}

export default ContactPage;
