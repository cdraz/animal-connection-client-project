import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import "./JobCard.css";

// React components

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function JobCard({ job }) {
  // Dispatch hook
  const dispatch = useDispatch();
  const history = useHistory();

  //MUI
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  //end MUI

  //  MUI modal setup for detail view
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // Modal style setup
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

  //set selected Job based on clicked Job Id
  const handleSelectJob = (job) => {
    // store selected movie object in Redux
    //dispatch({ type: "SET_SELECTED_JOB", payload: job });
    // go to details view
    history.push(`/jobDetail/${job.id}`);
  };
  //main

  return (
    <Grid>
      <Item id="item">
        <Card
          key={job.id}
          sx={{ maxWidth: 300, minWidth: 300, minHeight: 300 }}
        >
          <CardActionArea onClick={() => handleSelectJob(job)}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.secondary"
                gutterBottom
              >
                {job.client}-{job.jobNumber}
              </Typography>
              <Typography variant="h5" component="div">
                {job.notes}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            </CardContent>
            {job.description}
            <CardContent>
              <Typography gutterBottom noWrap variant="h6" component="div">
                {job.date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}

export default JobCard;
