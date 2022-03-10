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

function JobPayEdit(prop) {
  // Dispatch hook, store access
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  const selectedJob = useSelector((store) => store.selectedJob);
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
    dispatch({ type: "FETCH_JOB_DETAILS", payload: selectedJob.id });
  }, []);

  //edit job begins
  const editSelectedJob = (event) => {
    console.log("!@!@!@!#$#$#$#$#",prop.payDetails);
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

  return (
    <>
      {/* edit job form begins */}
      <FontAwesomeIcon
        className="penIcon"
        icon={faPenToSquare}
        flip="horizontal"
        transform="grow-9 right-15"
        onClick={() => setEditable(true)}
      />

      <div variant="body2">
        {/* conditional rendering if editable button was clicked  */}
        {!editable ? (
          <div>
            {payDetails.checkAmount}
            <br></br>
            {payDetails.paid.toString()}
            {payDetails.checkNumber}
            <br></br>
            {payDetails.checkDate}
          </div>
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
