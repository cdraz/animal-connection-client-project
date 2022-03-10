// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";

// React components
import JobCard from "../JobCard/JobCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

//MUI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";

function JobDetail() {
  // Dispatch hook, store access
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  const selectedJob = useSelector((store) => store.selectedJob);
  const selectedJobDetails = useSelector((store) => store.selectedJobDetails);
  //local state
  const [editable, setEditable] = useState(false);
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
    dispatch({ type: "FETCH_JOB_DETAILS", payload: selectedJob.id });
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
    Swal.fire({
      title: "Are you sure you want to finish job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Finish Job!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Job has been Finished!", "", "success");
        dispatch({ type: "FINISH_JOB", payload: selectedJob.id });
        history.push("/jobs");
      } else if (result.isDenied) {
        Swal.fire("Job Safe", "", "info");
      }
    });
  };

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
    };
    dispatch({ type: "EDIT_SELECTED_JOB", payload: editJobToSend });
  };

  return (
    <>
      {/* edit form begins */}
      <FontAwesomeIcon
        className="penIcon"
        icon={faPenToSquare}
        flip="horizontal"
        transform="grow-9 right-15"
        onClick={() => setEditable(true)}
      />

      <div variant="body2">
        {/* conditional rendering if editable button was clicked  */}
        {!editable ? (
          <h3>HELLO</h3>
        ) : (
          <form onSubmit={editSelectedJob}>
            {/* client input */}
            <input
              type="text"
              value={newClient}
              onChange={(evt) => {
                setNewClient(evt.target.value);
              }}
              placeholder={selectedJob.client}
            />
            {/* description */}
            <input
              type="text"
              value={newDescription}
              onChange={(evt) => {
                setNewDescription(evt.target.value);
              }}
              placeholder={selectedJob.description}
            />

            {/* newDate */}
            <input
              type="date"
              value={newDate}
              onChange={(evt) => {
                setNewDate(evt.target.value);
              }}
              placeholder={selectedJob.date}
            />

            {/* newNotes */}
            <input
              type="text"
              value={newNotes}
              onChange={(evt) => {
                setNewNotes(evt.target.value);
              }}
              placeholder={selectedJob.notes}
            />

            {/* newJobNumber */}
            <input
              type="text"
              value={newJobNumber}
              onChange={(evt) => {
                setNewJobNumber(evt.target.value);
              }}
              placeholder={selectedJob.jobNumber}
            />

            {/* {user.id === something.user_id && ( */}
            <button className="newJobDetailBtn" type="submit">
              Submit
            </button>
            {/* )} */}
            <FontAwesomeIcon
              icon={faBan}
              transform="grow-9 right-15 down-4"
              onClick={() => setEditable(false)}
            />
          </form>
        )}
      </div>

      {/* edit form ends */}
      <div>
        {selectedJob.client}
        <br></br>
        {selectedJob.date}
        <br></br>
        {selectedJob.jobNumber}
        <br></br>
        {selectedJob.notes}
        <br></br>
        {selectedJob.description}
        <br></br>
        {selectedJobDetails.checkAmount}

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

        <Stack direction="row" spacing={2}>
          <Button
            onClick={deleteJob}
            id="jobDelete"
            type="button"
            value="Delete"
            variant="contained"
          >
            Delete Job
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default JobDetail;
