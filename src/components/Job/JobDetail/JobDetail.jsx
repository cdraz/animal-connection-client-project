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

function JobDetail() {
  // Dispatch hook, store access
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  const selectedJob = useSelector((store) => store.selectedJob);
  const selectedJobDetails = useSelector((store) => store.selectedJobDetails);

  useEffect(() => {
    console.log("selected job is", selectedJob);
    console.log("selected job  DETAILS is", selectedJobDetails);
    dispatch({ type: "FETCH_JOB_DETAILS", payload: selectedJob.id});
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

  return (
    <>
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
