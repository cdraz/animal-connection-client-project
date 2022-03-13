// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";
import "./JobPage.css";

// React components
import JobCard from "../JobCard/JobCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import JobSearchBar from "../../SearchBar/JobSearchBar";

function JobPage() {
  // Dispatch hook, store access
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch({ type: "FETCH_JOBS" });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "80%",
    height: "80%",
    p: 4,
    overflow: "scroll",
    padding: 3,
  };

  return (
    <>
      <JobSearchBar />
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Job
      </button>
      <div id="jobCardContainer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} justifyContent="space-evenly">
            {Array.isArray(jobs) ? (
              jobs.map((job) => <JobCard job={job} key={job.id} />)
            ) : (
              <p>Loading...</p>
            )}
          </Grid>
        </Box>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <JobCreate />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default JobPage;
