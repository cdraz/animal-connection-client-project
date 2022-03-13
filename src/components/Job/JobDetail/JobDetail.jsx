// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";
import JobEditDetail from "./JobEditDetail";
import JobPayEdit from "./JobPayEdit";
import { useParams, Link } from 'react-router-dom';


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
    // Set id from URL parameters
    const { id } = useParams();
  

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

  return (
    <>
      <JobEditDetail />
      <div>
        <br></br>

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
      <br></br>
      <div id="jobCardContainer">
      <Box sx={{ flexGrow: 1 }}>
<Grid
          container
          spacing={3}
          justifyContent="space-evenly"
        >
      {Array.isArray(selectedJobDetails) ? (
        selectedJobDetails.map((payDetails) => (
          <JobPayEdit key={payDetails.id} payDetails={payDetails} />
        ))
      ) : (
        <p>Loading...</p>
      )}
      </Grid>
      </Box>
      </div>
    </>
  );
}

export default JobDetail;
