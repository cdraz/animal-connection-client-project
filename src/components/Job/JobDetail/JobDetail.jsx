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

  

  return (
    <>
     <h1>hello</h1>
    </>
  );
}

export default JobDetail;
