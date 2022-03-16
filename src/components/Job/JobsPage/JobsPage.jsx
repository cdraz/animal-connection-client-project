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
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

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
    <div id="jobsPage">
      <Grid container spacing={8}>
        <Grid item xs={12} display="inline-flex">
          <Typography variant="h1">
            Jobs
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Job
          </Button>
          <JobSearchBar />
        </Grid>
        {/* <div id="jobCardContainer"> */}
        <Grid item container spacing={2} xs={9}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              alignItems="left"
            >
              {Array.isArray(jobs) ? (
                jobs.map((job) => <JobCard job={job} key={job.id} />)
              ) : (
                <p>Loading...</p>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* </div> */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Stack spacing={2}>
            <JobCreate />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default JobPage;
