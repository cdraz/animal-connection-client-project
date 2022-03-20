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
import Swal from "sweetalert2";

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

//deletes entire selected job and all foreign keys associated with it after confirmation
  const deleteJob = () => {
    Swal.fire({
      title: "Are you sure you want to delete job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Entire Job!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Job has been Deleted!", "", "success");
        dispatch({ type: "DELETE_JOB", payload: selectedJob.id });
        history.push("/jobs");
      } else if (result.isDenied) {
        Swal.fire("Job Safe", "", "info");
      }
    });
  };


    //finish job do put request to changed active to inactive
    const finishJob = () => {
      dispatch({ type: "FINISH_JOB", payload: id });
    
    };









  //edit job begins
  const editSelectedJob = (event) => {
    event.preventDefault();
    let timerInterval
    Swal.fire({
        icon: 'success',
      title: 'Job Updated!',
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
    setEditable(false)
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
          

<div>

    {/* Delete job button starts */}
    <Button
            onClick={deleteJob}
            id="jobDelete"
            type="button"
            value="Delete"
            variant="contained"
          >
            Delete Job
          </Button>
          {/* Delete job button ends */}


{/* finish job button starts */}
    {selectedJob.active ? (
          <Stack direction="row" spacing={2}>
            <Button
              onClick={finishJob}
              id="jobFinish"
              type="button"
              value="Finish"
              variant="contained"
            >
              Finish Job
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              onClick={finishJob}
              id="jobFinish"
              type="button"
              value="Finish"
              variant="outlined"
            >
              Finished
            </Button>
          </Stack>
        )}
        {/* finish job button ends */}






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
          </div>
        )}
      </div>
      

      {/* edit job form ends */}
    </>
  );
}

export default JobEditDetail;
