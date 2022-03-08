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
import Stack from "@mui/material/Stack";

function JobDetail() {
  // Dispatch hook, store access
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  const selectedJob = useSelector((store) => store.selectedJob);
  const selectedJobDetails = useSelector((store) => store.selectedJobDetails);

  useEffect(() => {
    console.log("selected job is", selectedJob);
    console.log("selected job  DETAILS is", selectedJobDetails);
    dispatch({ type: "FETCH_JOB_DETAILS", payload: selectedJob.id});
  }, []);

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
     </div>
    </>
  );
}

export default JobDetail;
