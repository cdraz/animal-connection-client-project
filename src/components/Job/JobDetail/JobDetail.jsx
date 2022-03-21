// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";
import JobEditDetail from "./JobEditDetail";
import JobPayEdit from "./JobPayEdit";
import JobContacts from "./JobContacts";
import { useParams, Link } from "react-router-dom";

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
    dispatch({ type: "FETCH_SELECTED_JOB_CONTACTS", payload: id });
  }, []);

  return (
    <Grid container spacing={5} id="AnimalDetailContainer">
      <Grid item xs={3}>
        <JobEditDetail />
      </Grid>
      <Grid item xs={9}>
        <JobContacts />
      </Grid>

      <div></div>
      <br></br>
      <div id="jobCardContainer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} justifyContent="space-evenly">
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
    </Grid>
  );
}

export default JobDetail;
