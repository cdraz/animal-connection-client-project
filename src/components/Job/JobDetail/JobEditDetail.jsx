// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";
import { useParams, Link } from "react-router-dom";
import "./JobEditDetail.css";

// React components
import { useHistory } from "react-router-dom";

//MUI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import jacobsAwesomeDateFormatterVersion2 from "../../DateFormatter/dateFormatter";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
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
        Swal.fire("Canceled", "", "info");
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
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Job Updated!",
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
    let editJobToSend = {
      newClient: selectedJob.client,
      newDescription: selectedJob.description,
      newDate: selectedJob.date,
      newNotes:selectedJob.notes,
      newJobNumber: selectedJob.jobNumber,
      selectedJob: selectedJob.id,
      id: id,
    };
    dispatch({ type: "EDIT_SELECTED_JOB", payload: editJobToSend });
    setEditable(false);
  };

    // Declare handleChange
    const handleChange = (event) => {
      dispatch({
        type: "UPDATE_SELECTED_JOB",
        payload: { [event.target.name]: event.target.value },
      });
    };

  return (
    <>
      <div variant="body2">
        {/* conditional rendering if editable button was clicked  */}
        {!editable ? (
          <Stack>
            {/* edit job form begins */}
            <IconButton
              onClick={() => setEditable(true)}
              aria-label="delete"
              size="large"
              color="primary"
            >
              <FontAwesomeIcon
                className="penIcon"
                icon={faPenToSquare}
                flip="horizontal"
              />
            </IconButton>

            <h2 className="jobClient">
              {selectedJob.client}: {selectedJob.jobNumber}
            </h2>
            <h5 className="jobDate">
              {jacobsAwesomeDateFormatterVersion2(selectedJob.date)}
            </h5>
            <p className="jobDescription">{selectedJob.description}</p>
            <p>{selectedJob.notes}</p>
          </Stack>
        ) : (
          <div>
            <form onSubmit={editSelectedJob}>
              <Stack spacing={1}>
                {/* )} */}
                <IconButton
                  onClick={() => setEditable(false)}
                  aria-label="delete"
                  size="large"
                  color="primary"
                >
                  <FontAwesomeIcon icon={faBan} transform="grow-15" />
                </IconButton>

                {/* Inputs start */}

                {/* client input */}
                <TextField
                  type="text"
                  name="client"
                  value={selectedJob.client}
                  label="Client Name"
                  onChange={(event) => handleChange(event)}
                
                />
                {/* description */}
                <TextField
                  type="text"
                  name="description"
                  multiline
                  rows={2}
                  value={selectedJob.description}
                  label="Description"
                  onChange={(event) => handleChange(event)}
                  
                />

                {/* newDate */}
                <TextField
                  type="date"
                  label="Date"
                  name="date"
                  value={jacobsAwesomeDateFormatterVersion2(selectedJob.date, 'input')}
                  onChange={(event) => handleChange(event)}
                  
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                {/* newJobNumber */}
                <TextField
                  type="text"
                  name="jobNumber"
                  value={selectedJob.jobNumber}
                  label="Job Number"
                  onChange={(event) => handleChange(event)}
                  
                />

                {/* newNotes */}
                <TextField
                  type="text"
                  name="notes"
                  value={selectedJob.notes}
                  label="Notes"
                  multiline
                  rows={6}
                  onChange={(event) => handleChange(event)}
                  
                />

                {/* inputs end */}

                {/* {user.id === something.user_id && ( */}
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </form>

            <div className="jobDetailBtns">
              {/* Delete job button starts */}
              <Button
                className="deleteJob"
                onClick={deleteJob}
                id="jobDelete"
                type="button"
                value="Delete"
                variant="contained"
              >
                Delete
              </Button>
              {/* Delete job button ends */}

              {/* finish job button starts */}
              {selectedJob.active ? (
                <Button
                  className="finishJob"
                  onClick={finishJob}
                  id="jobFinish"
                  type="button"
                  value="Finish"
                  variant="contained"
                >
                  Finish
                </Button>
              ) : (
                <Button
                  className="unfinishJob"
                  onClick={finishJob}
                  id="jobFinish"
                  type="button"
                  value="Finish"
                  variant="outlined"
                >
                  Finished
                </Button>
              )}
            </div>

            {/* finish job button ends */}
          </div>
        )}
      </div>

      {/* edit job form ends */}
    </>
  );
}

export default JobEditDetail;
