import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI imports
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";

function AnimalBehaviorTrainingTable() {
  // Dispatch hook, store access
  const dispatch = useDispatch();
  const animal = useSelector((store) => store.selectedAnimal);

  // Set state variable for edit mode
  const [edit, setEdit] = useState(false);

  // Declare handleChange
  const handleChange = (event) => {
    dispatch({
      type: "UPDATE_SELECTED_ANIMAL",
      payload: { [event.target.name]: event.target.checked },
    });
  };

  // Declare updateAnimal
  const updateAnimal = () => {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Animal Behavior Updated!",
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
      type: "UPDATE_ANIMAL_TRAINING",
      payload: {
        id: animal.id,
        sitOnLeash: animal.sitOnLeash,
        sitOffLeash: animal.sitOffLeash,
        downOnLeash: animal.downOnLeash,
        downOffLeash: animal.downOffLeash,
        standOnLeash: animal.standOnLeash,
        standOffLeash: animal.standOffLeash,
        barkOnCommand: animal.barkOnCommand,
        holdItem: animal.holdItem,
        mark: animal.mark,
        silentCommands: animal.silentCommands,
        strangerHandle: animal.strangerHandle,
        strangerDress: animal.strangerDress,
        goodAroundChildren: animal.goodAroundChildren,
        otherDogs: animal.otherDogs,
        smallAnimals: animal.smallAnimals,
        loudNoiseLights: animal.loudNoiseLights,
        shortNotice: animal.shortNotice,
        overnight: animal.overnight,
      },
    });
    setEdit(!edit);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="h5">Behavior, Training, Availability</Typography>
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
            <Button variant="contained" onClick={updateAnimal}>
              Save
            </Button>
            <Button onClick={() => setEdit(!edit)}>Cancel</Button>
          </>
        )}
      </Stack>
      <Paper>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Stack spacing={0}>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="sitOnLeash"
                  value={animal.sitOnLeash}
                  disabled={!edit}
                  checked={animal.sitOnLeash}
                />{" "}
                Sit and stay on leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="sitOffLeash"
                  value={animal.sitOffLeash}
                  disabled={!edit}
                  checked={animal.sitOffLeash}
                />{" "}
                Sit and stay off leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="downOnLeash"
                  value={animal.downOnLeash}
                  disabled={!edit}
                  checked={animal.downOnLeash}
                />{" "}
                Down and stay on leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="downOffLeash"
                  value={animal.downOffLeash}
                  disabled={!edit}
                  checked={animal.downOffLeash}
                />{" "}
                Down and stay off leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="standOnLeash"
                  value={animal.standOnLeash}
                  disabled={!edit}
                  checked={animal.standOnLeash}
                />{" "}
                Stand and stay on leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="standOffLeash"
                  value={animal.standOffLeash}
                  disabled={!edit}
                  checked={animal.standOffLeash}
                />{" "}
                Stand and stay off leash
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="barkOnCommand"
                  value={animal.barkOnCommand}
                  disabled={!edit}
                  checked={animal.barkOnCommand}
                />{" "}
                Bark on cue
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="holdItem"
                  value={animal.holdItem}
                  disabled={!edit}
                  checked={animal.holdItem}
                />{" "}
                Hold and object
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="mark"
                  value={animal.mark}
                  disabled={!edit}
                  checked={animal.mark}
                />{" "}
                Move to a mark
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="silentCommands"
                  value={animal.silentCommands}
                  disabled={!edit}
                  checked={animal.silentCommands}
                />{" "}
                Can use silent commands
              </div>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={0}>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="strangerHandle"
                  value={animal.strangerHandle}
                  disabled={!edit}
                  checked={animal.strangerHandle}
                />{" "}
                Can be handled by stranger
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="strangerDress"
                  value={animal.strangerDress}
                  disabled={!edit}
                  checked={animal.strangerDress}
                />{" "}
                Can be dressed by stranger
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="goodAroundChildren"
                  value={animal.goodAroundChildren}
                  disabled={!edit}
                  checked={animal.goodAroundChildren}
                />{" "}
                Works well with children
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="otherDogs"
                  value={animal.otherDogs}
                  disabled={!edit}
                  checked={animal.otherDogs}
                />{" "}
                Works well with other dogs
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="smallAnimals"
                  value={animal.smallAnimals}
                  disabled={!edit}
                  checked={animal.smallAnimals}
                />{" "}
                Works well with other small animals
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="loudNoiseLights"
                  value={animal.loudNoiseLights}
                  disabled={!edit}
                  checked={animal.loudNoiseLights}
                />{" "}
                Afraid of strobes
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="shortNotice"
                  value={animal.shortNotice}
                  disabled={!edit}
                  checked={animal.shortNotice}
                />{" "}
                Available at short notice
              </div>
              <div>
                <Checkbox
                  onChange={(event) => handleChange(event)}
                  name="overnight"
                  value={animal.overnight}
                  disabled={!edit}
                  checked={animal.overnight}
                />{" "}
                Available for overnight jobs
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default AnimalBehaviorTrainingTable;
