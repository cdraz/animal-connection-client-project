import { useState } from "react";
import { useDispatch } from "react-redux";

// MUI imports
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";

function AnimalAuditionHistoryTable({ animal }) {
  // Store access
  const auditions = animal.auditions;

  // Dispatch hook
  const dispatch = useDispatch();

  // Set state variables for edit mode
  const [edit, setEdit] = useState(false);
  const [auditionInput, setAuditionInput] = useState("");

  // Declare addAudition
  const addAudition = () => {
    if (!auditionInput) {
      window.alert("Please input an audition date.");
      return;
    }
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Audition Added!",
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
    dispatch({
      type: "ADD_AUDITION",
      payload: {
        id: animal.id,
        date: auditionInput,
      },
    });
    setAuditionInput("");
  };

  // Declare handleDelete
  const handleDelete = (auditionId, animalsId) => {
    dispatch({
      type: "DELETE_AUDITION",
      payload: {
        id: auditionId,
        animalsId: animalsId,
      },
    });
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="h5">Audition History</Typography>
        {!edit && (
          <IconButton
            onClick={() => setEdit(!edit)}
            aria-label="edit"
            size="medium"
          >
            <EditSharpIcon />
          </IconButton>
        )}
        {edit && (
          <>
            <TextField
              id="audition-date-input"
              label="Audition Date"
              value={auditionInput}
              size="small"
              type="date"
              onChange={(event) => setAuditionInput(event.target.value)}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    onClick={addAudition}
                    size="small"
                  >
                    Add
                  </Button>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              onClick={() => {
                setEdit(!edit);
              }}
            >
              Cancel
            </Button>
          </>
        )}
      </Stack>
      <Stack direction="row" spacing={1}>
        {auditions && auditions[0] != null ? (
          auditions.map((audition) => (
            <Chip
              key={audition.id}
              label={audition.date}
              onDelete={
                edit
                  ? () => handleDelete(audition.id, audition.animalsId)
                  : null
              }
            />
          ))
        ) : (
          <Typography variant="p">No auditions on record.</Typography>
        )}
      </Stack>
    </>
  );
}

export default AnimalAuditionHistoryTable;
