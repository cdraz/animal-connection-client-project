// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";
import { useParams, Link } from "react-router-dom";
import './JobEditDetail.css';

// React components
import { useHistory } from "react-router-dom";

//MUI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@mui/material/IconButton';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import jacobsAwesomeDateFormatterVersion2 from '../../DateFormatter/dateFormatter'

import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
function JobEditDetail() {
  // Dispatch hook, store access
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  const selectedJob = useSelector((store) => store.selectedJob);
  const selectedJobDetails = useSelector((store) => store.selectedJobDetails);
  //local state
  const [editable, setEditable] = useState(false);
  // Set id from URL parameters
  const { id } = useParams();
  //Edit form
  const [newClient, setNewClient] = useState(`${selectedJob.client}`);
  const [newDescription, setNewDescription] = useState(
    `${selectedJob.description}`
  );
  const [newDate, setNewDate] = useState(`${selectedJob.date}`);
  const [newNotes, setNewNotes] = useState(`${selectedJob.notes}`);
  const [newJobNumber, setNewJobNumber] = useState(`${selectedJob.jobNumber}`);

  useEffect(() => {
    console.log("selected job is", selectedJob);
    console.log("selected job  DETAILS is", selectedJobDetails);
    dispatch({ type: "FETCH_JOB_DETAILS", payload: id });
    dispatch({ type: "FETCH_SELECTED_JOB", payload: id });
  }, []);

  //edit job begins
  const editSelectedJob = (event) => {
    event.preventDefault();
    let editJobToSend = {
      newClient: newClient,
      newDescription: newDescription,
      newDate: newDate,
      newNotes: newNotes,
      newJobNumber: newJobNumber,
      selectedJob: selectedJob.id,
      id: id,
    };
    dispatch({ type: "EDIT_SELECTED_JOB", payload: editJobToSend });
  };

  return (
    <>
      {/* edit job form begins */}
      <IconButton onClick={() => setEditable(true)} aria-label="delete" size="large" color="primary">
        <FontAwesomeIcon
          className="penIcon"
          icon={faPenToSquare}
          flip="horizontal"
        />
      </IconButton>

      <div variant="body2">
        {/* conditional rendering if editable button was clicked  */}
        {!editable ? (
          <Stack>
            {selectedJob.client}
            <br></br>
            {jacobsAwesomeDateFormatterVersion2(selectedJob.date)}
            <br></br>
            {selectedJob.jobNumber}
            <br></br>
            {selectedJob.notes}
            <br></br>
            {selectedJob.description}
          </Stack>
        ) : (


          <form onSubmit={editSelectedJob}>
            <Stack className="Gap" spacing={1.5}>
            {/* client input */}
            <TextField
              type="text"
              value={newClient}
              label="First Name"
              onChange={(evt) => {
                setNewClient(evt.target.value);
              }}
              placeholder={selectedJob.client}
            />
            {/* description */}
            <TextField
              type="text"
              value={newDescription}
              label="Description"
              onChange={(evt) => {
                setNewDescription(evt.target.value);
              }}
              placeholder={selectedJob.description}
            />

            {/* newDate */}
            <TextField
              type="date"
              value={newDate}
              onChange={(evt) => {
                setNewDate(evt.target.value);
              }}
              placeholder={selectedJob.date}
            />

            {/* newNotes */}
            <TextField
              type="text"
              value={newNotes}
              label="Notes"
              onChange={(evt) => {
                setNewNotes(evt.target.value);
              }}
              placeholder={selectedJob.notes}
            />

            {/* newJobNumber */}
            <TextField
              type="text"
              value={newJobNumber}
              label="Job Number"
              onChange={(evt) => {
                setNewJobNumber(evt.target.value);
              }}
              placeholder={selectedJob.jobNumber}
            />

            {/* {user.id === something.user_id && ( */}
              <Button type="submit" variant="contained">Submit</Button>
            {/* )} */}
            <IconButton onClick={() => setEditable(false)} aria-label="delete" size="large" color="primary">
              <FontAwesomeIcon
                icon={faBan}
                transform="grow-9"
              />
            </IconButton>
            </Stack>
          </form>
        )}
      </div>
      

      {/* edit job form ends */}
    </>
  );
}

export default JobEditDetail;
