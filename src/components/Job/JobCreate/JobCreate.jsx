import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./JobCreate.css";
import Stack from "@mui/material/Stack";

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
    history.push("/jobs");
    let timerInterval
    Swal.fire({
        icon: 'success',
      title: 'Job Added!',
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

  return (
    <div className="bodyContainer">
      <form className="newJobForm" onSubmit={saveJobInformation}>
        <Stack className= "jobStack" spacing={2}>
          <h1 className="createTitle">Create New Job</h1>
          {/* date input */}

          <input
            type="date"
            value={jobDate}
            onChange={(evt) => setJobDate(evt.target.value)}
            placeholder="Date"
          />
          {/* Clientinput */}

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

          {/* end Client input */}
          {/* Job # input */}

          <FormControl id="jobNumberBox" fullWidth sx={{ m: 1 }}>
            <InputLabel id="jobNumberLabel" htmlFor="outlined-adornment-amount">
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

          {/* end Job Number input */}
          

          {/* end date input */}

          <FormControl id="descriptionBox" fullWidth sx={{ m: 1 }}>
            <InputLabel
              id="descriptionLabel"
              htmlFor="outlined-adornment-amount"
            >
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

          <button className="box" type="submit">
            Create Job
          </button>
          {/* <button className="box" type="button" onClick={cancelJob}>
            cancel Job
          </button> */}
        </Stack>
      </form>
    </div>
  );
};

export default JobCreate;
