import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./JobCreate.css";

//MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const JobCreate = () => {
  const dispatch = useDispatch();
  //local state to be updated and sent to saga on form submit
  let [client, setClient] = useState("");
  let [jobNumber, setJobNumber] = useState("");
  let [jobDate, setJobDate] = useState("");
  let [notes, setNotes] = useState("");
  let [description, setDescription] = useState("");
  const history = useHistory();
  //on page load get all projects to be displayed on main screen
  //later used in selected project
  useEffect(() => {
    dispatch({ type: "GET_JOBS" });
  }, []);

  //Save budget/title/categoryId/userId data to object on submit/dispatch
  const jobData = {
    client: client,
    jobNumber: jobNumber,
    date: jobDate,
    notes: notes,
    description: description,
  };
  //send newly created project to DB then display it on the dom
  const saveJobInformation = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_JOB",
      payload: jobData,
    });
    //set inputs back to empty
    setClient("");
    setJobNumber("");
    setJobDate("");
    setNotes("");
    setDescription("");
  };
  //cancel project on confirm bring back to home page on denied continue project creation
//   const cancelJob = () => {
//     Swal.fire({
//       title: "Do you want to Cancel this Job?",
//       showDenyButton: true,
//       confirmButtonText: "Cancel Job",
//       denyButtonText: `Keep Creating`,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         Swal.fire("Canceled!", "", "success");
//         history.push("/user");
//       } else if (result.isDenied) {
//         Swal.fire("Job Safe", "", "info");
//       }
//     });
//   };

  return (
    <div className="bodyContainer">
      <form className="newJobForm" onSubmit={saveJobInformation}>
        <h1 className="createTitle">Create New Job</h1>
        <br></br>
        <div className="newForm1">
          {/* Clientinput */}

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl id="clientBox" fullWidth sx={{ m: 1 }}>
              <InputLabel id="clientLabel" htmlFor="outlined-adornment-amount">
                Client
              </InputLabel>
              <OutlinedInput
                type="text"
                required
                value={client}
                onChange={(evt) => setClient(evt.target.value)}
                label="Client"
              />
            </FormControl>
          </Box>
          {/* end Client input */}
          {/* Job # input */}

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl id="jobNumberBox" fullWidth sx={{ m: 1 }}>
              <InputLabel
                id="jobNumberLabel"
                htmlFor="outlined-adornment-amount"
              >
                Job #
              </InputLabel>
              <OutlinedInput
                type="text"
                required
                value={jobNumber}
                onChange={(evt) => setJobNumber(evt.target.value)}
                label="Job #"
              />
            </FormControl>
          </Box>
        </div>
        {/* end Job Number input */}

        <br />
        {/* date input */}
        <div className="newForm2">
          <input
            type="date"
            value={jobDate}
            onChange={(evt) => setJobDate(evt.target.value)}
            placeholder="Date"
          />
          
          {/* end date input */}
          <br />
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl id="descriptionBox" fullWidth sx={{ m: 1 }}>
              <InputLabel id="descriptionLabel" htmlFor="outlined-adornment-amount">
              Description
              </InputLabel>
              <OutlinedInput
                type="text"
                required
                value={description}
                onChange={(evt) => setDescription(evt.target.value)}
                label="Description"
              />
            </FormControl>
          </Box>


          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl id="notesBox" fullWidth sx={{ m: 1 }}>
              <InputLabel id="notesLabel" htmlFor="outlined-adornment-amount">
                Notes
              </InputLabel>
              <OutlinedInput
                type="text"
                required
                value={notes}
                onChange={(evt) => setNotes(evt.target.value)}
                label="Notes"
              />
            </FormControl>
          </Box>
        </div>
        <div className="newForm3">
          <button className="box" type="submit">
            Create Job
          </button>
          {/* <button className="box" type="button" onClick={cancelJob}>
            cancel Job
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default JobCreate;
