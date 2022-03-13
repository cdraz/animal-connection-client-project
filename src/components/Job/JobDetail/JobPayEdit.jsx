// Function imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCreate from "../JobCreate/JobCreate";

// React components
import { useHistory } from "react-router-dom";

//MUI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
import Swal from "sweetalert2";

//bottom section of job details page "cards" and their information
function JobPayEdit(prop) {
  // Dispatch hook, store access
  const history = useHistory();
  const dispatch = useDispatch();

  //this is a list of all jobs
  const jobs = useSelector((store) => store.jobs);

  //information about the job client/date/desc/id/jobnumber/notes
  //this is whats displayed at top of page
  const selectedJob = useSelector((store) => store.selectedJob);

  //information from jobJunction/join table paid/check/chackDate/animalImg/contactInfo 
  //this is whats displayed in the cards
  const selectedJobDetails = useSelector((store) => store.selectedJobDetails);

  //local state
  const [editable, setEditable] = useState(false);
  const payDetails = prop.payDetails;

  //Edit form
  const [newPaid, setNewPaid] = useState(`${payDetails.paid}`);
  const [newCheckNumber, setNewCheckNumber] = useState(
    `${payDetails.checkNumber}`
  );
  const [newCheckAmount, setNewCheckAmount] = useState(
    `${payDetails.checkAmount}`
  );
  const [newCheckDate, setNewCheckDate] = useState(`${payDetails.checkDate}`);

  useEffect(() => {
    console.log("selected job is", selectedJob);
    console.log("selected job  DETAILS is", selectedJobDetails);
    console.log("this is what jobs is", jobs );
    //getting all of selectedJobDetails that is used in the job detail cards
    dispatch({ type: "FETCH_JOB_DETAILS", payload: selectedJob.id });
  }, []);

  //MUI
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  //end MUI

  //edit job begins
  const editSelectedJob = (event) => {
    console.log("!@!@!@!#$#$#$#$#", prop.payDetails);
    event.preventDefault();
    let editJobPayToSend = {
      newPaid: newPaid,
      newCheckNumber: newCheckNumber,
      newCheckAmount: newCheckAmount,
      newCheckDate: newCheckDate,
      payDetails: payDetails.id,
    };
    dispatch({ type: "EDIT_SELECTED_JOB_PAY", payload: editJobPayToSend });
  };

    //deletes pet from job
    const deleteJobPet = () => {
      let petToDelete = {
        payDetail: payDetails.id,
        selectedJob: selectedJob.id
      }
      Swal.fire({
        title: "Are you sure you want to pet from job?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete Entire Job!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Job has been Deleted!", "", "success");
          dispatch({ type: "DELETE_JOB_PET", payload: petToDelete });
        } else if (result.isDenied) {
          Swal.fire("Job Safe", "", "info");
        }
      });
    };

  return (
    <>
      {/* edit job form begins */}

      <div variant="body2">
        {/* conditional rendering if editable button was clicked  */}
        {!editable ? (
          <Grid>
            <Item id="item">
              <Card
                key={payDetails.id}
                sx={{ maxWidth: 275, minWidth: 275, minHeight: 350, maxHeight: 350}}
              >
                <CardActionArea>
                  <FontAwesomeIcon
                    className="penIcon"
                    icon={faPenToSquare}
                    flip="horizontal"
                    transform="grow-9 left-140 down-20"
                    onClick={() => setEditable(true)}
                  />
                    <FontAwesomeIcon
        className="faTrash"
        icon={faTrash}
        flip="horizontal"
        transform="grow-9 right-130 down-20"
        onClick={deleteJobPet}
      />
                  <CardMedia
                    component="img"
                    height="140"
                    image={payDetails.image}
                    alt={payDetails.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      owner: {payDetails.firstName}
                      <br></br>
                      pet:{payDetails.name}
                      <br></br>
                      
                    </Typography>
                    <Typography variant="h6" component="div">
                      Paid: {payDetails.paid.toString()}
                      <br></br>
                      Amount: {payDetails.checkAmount}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ) : (
          <form onSubmit={editSelectedJob}>
            {/* client input */}

            <input
              type="text"
              value={newPaid}
              onChange={(evt) => {
                setNewPaid(evt.target.value);
              }}
              placeholder={payDetails.paid.toString}
            />
            {/* check number */}
            <input
              type="text"
              value={newCheckNumber}
              onChange={(evt) => {
                setNewCheckNumber(evt.target.value);
              }}
              placeholder={payDetails.checkNumber}
            />

            {/* check amount */}
            <input
              type="text"
              value={newCheckAmount}
              onChange={(evt) => {
                setNewCheckAmount(evt.target.value);
              }}
              placeholder={payDetails.checkAmount}
            />

            {/* newDate */}
            <input
              type="date"
              value={newCheckDate}
              onChange={(evt) => {
                setNewCheckDate(evt.target.value);
              }}
              placeholder={payDetails.checkDate}
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

      {/* edit job form ends */}
    </>
  );
}

export default JobPayEdit;
